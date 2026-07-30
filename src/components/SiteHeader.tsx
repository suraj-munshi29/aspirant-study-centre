import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

const LOGO = "/logo.png";

const NAV = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Courses", to: "/courses" as const },
  { label: "Faculty", to: "/faculty" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-colors duration-300">
      <nav className="flex items-center justify-between h-20 px-gutter max-w-container-max mx-auto">
        <Link to="/" className="flex min-w-0 items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-surface-container-lowest p-1 shadow-sm border border-outline-variant/30 group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center overflow-hidden">
            <img alt="Aspirant Study Centre Logo" className="w-full h-full object-contain" src={LOGO} />
          </div>
          <span className="truncate text-lg sm:text-xl md:text-2xl font-extrabold text-primary tracking-tight group-hover:text-primary/90 transition-colors">
            Aspirant Study Centre
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                  activeProps={{ className: "text-sm text-primary border-b-2 border-primary pb-1 font-semibold" }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary hover:bg-primary/10 transition-colors"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface px-gutter py-4 transition-colors duration-300">
          <ul className="flex flex-col max-w-container-max mx-auto gap-2">
            {NAV.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base text-on-surface-variant hover:text-primary transition-colors"
                  activeProps={{ className: "block py-2 text-base text-primary font-semibold" }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
