import { cn } from "@/lib/utils";

/**
 * `onDark` = wordmark on navy (#1A284D): blue-600 mark + white/blue text (reference homepage).
 */
export function Logo({
  onDark = false,
  /** Reference navbar: navy title when scrolled on white bar; sky subtitle when over hero. */
  navScrolled,
}: {
  onDark?: boolean;
  navScrolled?: boolean;
}) {
  const isRefNav = onDark && navScrolled !== undefined;
  return (
    <div className="group flex cursor-pointer items-center gap-3">
      <div className="relative">
        <div
          className={cn(
            "flex h-10 w-10 transform items-center justify-center overflow-hidden rounded-xl transition-all duration-500 group-hover:scale-105 sm:h-12 sm:w-12",
            onDark ? "bg-blue-600" : "bg-primary"
          )}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 18h3V8H2v10zm5 0h3V4H7v14zm5 0h3v-7h-3v7zm5 0h3v-4h-3v4z" />
          </svg>
          <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-tr from-white/0 via-white/10 to-white/0 transition-transform duration-1000 group-hover:translate-x-[100%]" />
        </div>
        <div
          className={cn(
            "absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full border-[3px]",
            onDark ? "border-[#1A284D] bg-emerald-400" : "border-background bg-accent"
          )}
        />
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "text-xl font-black uppercase leading-none tracking-tighter sm:text-2xl",
            isRefNav && navScrolled ? "text-[#1A284D]" : onDark ? "text-white" : "text-text"
          )}
        >
          AHREFS
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-black uppercase tracking-[0.2em] sm:text-[11px]",
            isRefNav && navScrolled ? "text-gray-500" : onDark ? "text-blue-100" : "text-primary"
          )}
        >
          GROUP BUY
        </span>
      </div>
    </div>
  );
}
