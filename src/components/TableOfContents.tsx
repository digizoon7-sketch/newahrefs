"use client";

import { useLayoutEffect, useState, type RefObject } from "react";
import { ChevronRight, List } from "lucide-react";

export type TocItem = { id: string; text: string; level: 2 | 3 };

function slugify(raw: string) {
  const s = raw
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^\da-z]+/g, "-")
    .replace(/^-|-$/g, "");
  return (s || "section").slice(0, 96);
}

function buildTocFromRoot(root: HTMLElement): TocItem[] {
  const headings = Array.from(root.querySelectorAll("h2, h3")) as HTMLHeadingElement[];
  const used = new Set<string>();
  const list: TocItem[] = [];

  for (const h of headings) {
    let id = h.id;
    if (!id) {
      const base = slugify(h.textContent?.trim() || "section");
      id = base;
      let n = 1;
      while (used.has(id)) {
        id = `${base}-${n++}`;
      }
      h.id = id;
    }
    used.add(id);
    if (!h.classList.contains("scroll-mt-28")) {
      h.classList.add("scroll-mt-28");
    }
    list.push({
      id,
      text: (h.textContent || "").trim(),
      level: h.tagName === "H2" ? 2 : 3,
    });
  }

  return list;
}

type TableOfContentsProps = {
  containerRef: RefObject<HTMLElement | null>;
  routeKey: string;
};

export function TableOfContents({ containerRef, routeKey }: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([]);

  useLayoutEffect(() => {
    const apply = () => {
      const root = containerRef.current;
      if (!root) {
        setItems([]);
        return;
      }
      setItems(buildTocFromRoot(root));
    };

    apply();
    const t0 = window.setTimeout(apply, 0);
    const t1 = window.setTimeout(apply, 120);

    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
    };
  }, [containerRef, routeKey]);

  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Table of contents"
      className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-md shadow-slate-200/40 ring-1 ring-slate-100"
    >
      <div
        className="h-1 w-full bg-gradient-to-r from-[#FF5C00] via-orange-400 to-blue-500"
        aria-hidden
      />
      <div className="p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-blue-50 text-[#FF5C00] shadow-sm ring-1 ring-orange-100/80">
            <List className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </span>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">Jump to</p>
            <p className="text-sm font-black uppercase tracking-wide text-[#1A284D]">On this page</p>
          </div>
        </div>

        <ul className="max-h-[min(55vh,26rem)] list-none space-y-0.5 overflow-y-auto overscroll-contain pr-1 [-webkit-overflow-scrolling:touch]">
          {items.map((item) => {
            const isSub = item.level === 3;
            return (
              <li key={`${item.id}-${item.text}`}>
                <a
                  href={`#${item.id}`}
                  className={[
                    "group flex items-start gap-2 rounded-xl py-2 pl-2 pr-2 text-left transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00]/40 focus-visible:ring-offset-2",
                    isSub
                      ? "ml-3 border-l-2 border-slate-200 py-1.5 pl-4 text-xs font-semibold leading-snug text-slate-600 hover:border-orange-200 hover:bg-slate-50/90 hover:text-[#1A284D]"
                      : "text-[13px] font-bold leading-snug text-[#1A284D]/95 hover:bg-slate-50 hover:shadow-sm",
                  ].join(" ")}
                >
                  <ChevronRight
                    className={`mt-0.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${
                      isSub ? "h-3 w-3 text-slate-400 group-hover:text-[#FF5C00]" : "h-4 w-4 text-[#FF5C00]/70"
                    }`}
                    aria-hidden
                  />
                  <span className="min-w-0 flex-1">{item.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
