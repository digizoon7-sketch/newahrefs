export function Logo() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm shadow-xl transform group-hover:scale-105 transition-all duration-500 overflow-hidden">
          {/* Realistic Ahrefs-inspired Icon */}
          <svg 
            viewBox="0 0 24 24" 
            className="w-7 h-7 text-primary-foreground fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 18h3V8H2v10zm5 0h3V4H7v14zm5 0h3v-7h-3v7zm5 0h3v-4h-3v4z" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent rounded-full border-[3px] border-background shadow-lg" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-black tracking-tighter text-text uppercase leading-none">
          AHREFS
        </span>
        <span className="text-[11px] font-black text-primary uppercase tracking-[0.2em] mt-1">
          GROUP BUY
        </span>
      </div>
    </div>
  );
}
