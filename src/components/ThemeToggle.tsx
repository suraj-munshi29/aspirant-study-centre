import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export function ThemeToggle({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <AnimatedThemeToggler sound={true} />
    </div>
  );
}
