import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const transcript = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "d-ahrefs-modren",
  "agent-transcripts",
  "2375676e-7ba2-4195-9ac5-5a50d4b87ec8",
  "2375676e-7ba2-4195-9ac5-5a50d4b87ec8.jsonl"
);

const lines = fs.readFileSync(transcript, "utf8").split("\n");
const row = JSON.parse(lines[305]);
const text = row.message.content[0].text;
const introH2 = "## H2: Introduction to Why People Search for Ahrefs Group Buy";
const start = text.lastIndexOf(introH2);
const end = text.indexOf("</user_query>");
const body = start >= 0 ? text.slice(start, end).trim() : "";

function splitParas(block) {
  return block
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/** Replace **anchor** with Link; only two occurrences in source. */
function paraToJsx(para) {
  const cheap = "**cheap Ahrefs group buy access**";
  const services = "**Ahrefs group buy services online**";
  if (para.includes(cheap)) {
    const [a, b] = para.split(cheap);
    return `      <P>
        {${JSON.stringify(a)}}
        <Link to={PILLAR} className={AC}>
          cheap Ahrefs group buy access
        </Link>
        {${JSON.stringify(b)}}
      </P>`;
  }
  if (para.includes(services)) {
    const [a, b] = para.split(services);
    return `      <P>
        {${JSON.stringify(a)}}
        <Link to={PILLAR} className={AC}>
          Ahrefs group buy services online
        </Link>
        {${JSON.stringify(b)}}
      </P>`;
  }
  return `      <P>{${JSON.stringify(para)}}</P>`;
}

const chunks = [];
const h2Regex = /^## H2: (.+)$/gm;
const h3Regex = /^### H3: (.+)$/gm;

let pos = 0;
const matches = [...body.matchAll(/^(## H2: .+)$/gm)];

for (let mi = 0; mi < matches.length; mi++) {
  const m = matches[mi];
  const startIdx = m.index;
  const endIdx = mi + 1 < matches.length ? matches[mi + 1].index : body.length;
  const section = body.slice(startIdx, endIdx).trim();
  const h2Line = section.match(/^## H2: (.+)$/m);
  if (!h2Line) continue;
  chunks.push({ type: "h2", title: h2Line[1].trim() });

  let rest = section.slice(section.indexOf("\n", section.indexOf("## H2:")) + 1).trim();
  const h3Blocks = rest.split(/(?=^### H3: )/m).filter((b) => b.trim());

  for (const block of h3Blocks) {
    const h3m = block.match(/^### H3: (.+)$/m);
    if (!h3m) continue;
    const title = h3m[1].trim();
    const afterH3 = block.slice(block.indexOf("\n") + 1).trim();
    const paras = splitParas(afterH3);
    chunks.push({ type: "h3", title, paras });
  }
}

const inner = chunks
  .map((c) => {
    if (c.type === "h2") {
      return `      <H2>${c.title}</H2>`;
    }
    const parasJsx = c.paras.map((p) => paraToJsx(p)).join("\n");
    return `      <H3>${c.title}</H3>\n${parasJsx}`;
  })
  .join("\n\n");

const header = `import type { ReactNode } from "react";
import { Link } from "react-router-dom";

function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 font-medium leading-relaxed text-slate-600">{children}</p>;
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-12 border-b border-slate-200 pb-2 text-2xl font-black uppercase tracking-tight text-[#1A284D] first:mt-0 sm:text-3xl">
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 text-xl font-black text-[#1A284D] sm:text-2xl">{children}</h3>;
}

const AC =
  "font-bold text-blue-700 underline decoration-blue-400/60 underline-offset-2 hover:text-blue-800";
const PILLAR = "/ahrefs-group-buy-guide";

/** Full article for \`/why-search-for-ahrefs-group-buy\`. Exactly two in-body anchors → pillar. */
export function WhySearchForAhrefsGroupBuyArticle() {
  return (
    <div className="space-y-1 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
`;

const footer = `
    </div>
  );
}
`;

const outPath = path.join(__dirname, "..", "src", "content", "WhySearchForAhrefsGroupBuyArticle.tsx");
fs.writeFileSync(outPath, header + inner + footer, "utf8");
console.log("Wrote", outPath);
