import { useState } from "react";
import { Link } from "@tanstack/react-router";

const LOGO = "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg";

const NAV = [
  { label: "Home", to: "/" as const },
  { label: "Courses", to: "/courses" as const },
  { label: "About", to: "/about" as const },
  { label: "Faculty", to: "/faculty" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <nav className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 h-20 px-gutter max-w-container-max mx-auto lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-sm">
          <img alt="Aspirant Study Center Logo" className="h-10 w-10 shrink-0 object-contain" src={LOGO} />
          <span className="truncate text-lg sm:text-2xl font-bold text-primary tracking-tight">
            Aspirant Study Center
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-xl">
          {NAV.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                activeProps={{ className: "text-sm text-primary border-b-2 border-primary pb-1 font-semibold" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-lg py-sm rounded-lg text-sm font-semibold tracking-wide active:scale-95 transition-all shadow-md hover:shadow-lg"
          >
            Book Free Demo
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary hover:bg-primary/10"
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface">
          <ul className="flex flex-col px-gutter py-md max-w-container-max mx-auto">
            {NAV.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-sm text-base text-on-surface-variant hover:text-primary"
                  activeProps={{ className: "block py-sm text-base text-primary font-semibold" }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-sm">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-primary text-on-primary px-lg py-sm rounded-lg text-sm font-semibold"
              >
                Book Free Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
