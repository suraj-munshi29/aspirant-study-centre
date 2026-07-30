import { useTheme } from "../hooks/useTheme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative inline-flex items-center justify-center h-10 px-3 rounded-full border border-outline-variant/40 bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-sm active:scale-95 group ${className}`}
    >
      <div className="flex items-center gap-1.5 text-xs font-semibold select-none">
        <span className="material-symbols-outlined text-lg transition-transform duration-500 rotate-0 dark:rotate-[360deg] text-amber-500 dark:text-sky-400">
          {theme === "dark" ? "dark_mode" : "light_mode"}
        </span>
        <span className="hidden sm:inline capitalize text-on-surface-variant font-medium text-xs">
          {theme === "dark" ? "Dark" : "Light"}
        </span>
      </div>
    </button>
  );
}
