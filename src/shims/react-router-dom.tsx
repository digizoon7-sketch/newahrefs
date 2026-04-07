"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";

type ShimLinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  to?: string;
  href?: string;
};

export function Link({ to, href, ...rest }: ShimLinkProps) {
  const finalHref = href ?? to ?? "/";
  return <NextLink href={finalHref} {...rest} />;
}

// Minimal no-op shims so existing imports don't break during migration.
export function useParams<T extends Record<string, string>>() {
  return {} as T;
}

export function useLocation() {
  const pathname = usePathname();
  return { pathname };
}

export function Navigate(_props: { to: string; replace?: boolean }) {
  return null;
}

export function BrowserRouter(_props: { children: ReactNode }) {
  return _props.children as any;
}

export function Routes(_props: { children: ReactNode }) {
  return _props.children as any;
}

export function Route(_props: ComponentProps<"div"> & { path: string; element: ReactNode }) {
  return null;
}

