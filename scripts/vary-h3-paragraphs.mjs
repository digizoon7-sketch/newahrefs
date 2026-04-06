/**
 * Under each H3, if the next content is exactly 3 <P>...</P> blocks (then H2/H3/H4 or end),
 * keep 1, 2, or 3 paragraphs using a fixed cycle (no Math.random — stable builds).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, "..", "src", "content");

const FILES = [
  "AhrefsGroupBuyGuideArticle.tsx",
  "WhatIsAhrefsGroupBuyArticle.tsx",
  "IsAhrefsGroupBuyWorthItArticle.tsx",
  "AhrefsGroupBuyReviewArticle.tsx",
  "ProsAndConsOfAhrefsGroupBuyArticle.tsx",
  "AhrefsGroupBuyForBeginnersArticle.tsx",
];

// Mixed pattern: 3,1,2,2,1,3,... so distribution varies by section
const PATTERN = [3, 1, 2, 2, 1, 3, 1, 2, 3, 2, 1, 3];

function extractLeadingPs(block) {
  const ps = [];
  let rest = block;
  while (true) {
    const m = rest.match(/^\s*<P[\s\S]*?<\/P>/);
    if (!m) break;
    ps.push(m[0].replace(/^\s+/, "").replace(/\s+$/, ""));
    rest = rest.slice(m[0].length);
  }
  return { ps, rest };
}

function processFile(text, fileIndex) {
  let h3SectionIndex = 0;
  let pos = 0;
  const out = [];

  while (pos < text.length) {
    const h3Start = text.indexOf("<H3", pos);
    if (h3Start === -1) {
      out.push(text.slice(pos));
      break;
    }
    out.push(text.slice(pos, h3Start));
    const h3Close = text.indexOf("</H3>", h3Start);
    if (h3Close === -1) {
      out.push(text.slice(h3Start));
      break;
    }
    const h3End = h3Close + 5;
    const header = text.slice(h3Start, h3End);

    let blockEnd = text.length;
    for (const marker of ["<H2>", "<H3", "<H4>"]) {
      const idx = text.indexOf(marker, h3End);
      if (idx !== -1 && idx < blockEnd) blockEnd = idx;
    }
    const block = text.slice(h3End, blockEnd);
    const { ps, rest } = extractLeadingPs(block);

    if (ps.length === 3) {
      const patternIdx = (h3SectionIndex + fileIndex * 7) % PATTERN.length;
      const keep = PATTERN[patternIdx];
      const kept = ps.slice(0, keep);
      const indent = "\n      ";
      const between = indent;
      const restTrim = rest.replace(/^\s*/, rest.startsWith("\n") ? "\n      " : "\n      ");
      out.push(header + indent + kept.join(between) + (rest ? restTrim : ""));
      h3SectionIndex++;
    } else {
      out.push(header + block);
    }
    pos = blockEnd;
  }

  return out.join("");
}

for (let fi = 0; fi < FILES.length; fi++) {
  const name = FILES[fi];
  const fp = path.join(contentDir, name);
  const raw = fs.readFileSync(fp, "utf8");
  const next = processFile(raw, fi);
  if (next !== raw) {
    fs.writeFileSync(fp, next, "utf8");
    console.log("updated:", name);
  } else {
    console.log("unchanged:", name);
  }
}
