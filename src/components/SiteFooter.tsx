const LOGO = "/logo.png";

function Icon({ name, style }: { name: string; style?: React.CSSProperties }) {
  return <span className="material-symbols-outlined" style={style}>{name}</span>;
}

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-highest w-full pt-section-gap pb-lg">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-lg">
        <div className="flex flex-col gap-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-surface-container-lowest p-1 shadow-sm border border-outline-variant/30 shrink-0 flex items-center justify-center overflow-hidden">
              <img alt="Logo" className="w-full h-full object-contain" src={LOGO} />
            </div>
            <span className="text-lg font-extrabold text-primary tracking-tight">Aspirant Study Center</span>
          </div>
          <p className="text-on-surface-variant text-sm mt-sm">
            Pioneering excellence in competitive education for over 15 years. Nurturing minds, building futures.
          </p>
          <div className="flex gap-md mt-md">
            {["public", "alternate_email", "share"].map((n) => (
              <a key={n} href="#" className="text-on-surface-variant hover:text-primary transition-all">
                <Icon name={n} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-md">
          <h4 className="font-bold text-primary">Quick Links</h4>
          <ul className="flex flex-col gap-sm">
            {["Scholarship Test", "Course Catalog", "Faculty Profiles", "Result Analysis"].map((l) => (
              <li key={l}>
                <a href="#" className="text-on-surface-variant hover:text-primary underline transition-all">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-md">
          <h4 className="font-bold text-primary">Contact Info</h4>
          <ul className="flex flex-col gap-sm text-sm text-on-surface-variant">
            <li className="flex items-center gap-sm"><Icon name="location_on" style={{ fontSize: 18 }} /> 402, Aspirant Plaza, Kota</li>
            <li className="flex items-center gap-sm"><Icon name="call" style={{ fontSize: 18 }} /> +91 800-ASP-EDU</li>
            <li className="flex items-center gap-sm break-all"><Icon name="mail" style={{ fontSize: 18 }} /> admissions@aspirantstudycenter.edu</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary">Newsletter</h4>
          <p className="text-xs text-on-surface-variant">Get current affairs updates & exam strategy directly in your inbox.</p>
          <div className="flex gap-0 rounded-lg overflow-hidden border border-outline-variant/40 mt-2">
            <input className="bg-surface-container-low text-on-surface border-none text-sm w-full focus:ring-0 px-4 min-w-0" placeholder="Your Email" type="email" />
            <button className="bg-primary text-on-primary px-4 shrink-0"><Icon name="send" /></button>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter mt-16 pt-6 border-t border-outline-variant/30 text-center">
        <p className="text-on-surface-variant text-sm">© 2024 Aspirant Study Center. Elevate Your Potential.</p>
      </div>
    </footer>
  );
}
