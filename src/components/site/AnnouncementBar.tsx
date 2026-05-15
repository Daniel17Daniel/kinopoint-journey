export const AnnouncementBar = () => {
  return (
    <div className="fixed top-0 inset-x-0 z-50 h-10 bg-[#0f0f0f] border-b border-border/40">
      <div className="container-wide h-full flex items-center justify-between gap-4 text-xs sm:text-sm">
        <div className="hidden md:inline-flex items-center gap-2 text-foreground/80 shrink-0 w-[160px]">
          <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
          <span>Набір відкритий</span>
        </div>
        <p className="flex-1 text-center text-gold font-medium truncate">
          Перший місяць — знижка 50%
        </p>
        <div className="hidden md:block shrink-0 w-[160px]" aria-hidden />
      </div>
    </div>
  );
};
