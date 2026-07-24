import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty | Aspirant Study Center — Mentors Who Deliver" },
      { name: "description", content: "Meet the IITians, doctors, and educators who make Aspirant Study Center a launchpad for JEE and NEET toppers." },
      { property: "og:title", content: "Faculty | Aspirant Study Center" },
      { property: "og:description", content: "Meet the mentors behind our top ranks." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FacultyPage,
});

const FACULTY = [
  { name: "Dr. Anil Kapoor", role: "HOD — Physics", tag: "IIT Bombay", exp: "20+ yrs", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
  { name: "Prof. Meera Iyer", role: "Chemistry Lead", tag: "IIT Madras", exp: "18 yrs", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
  { name: "Rajat Sinha", role: "Math Faculty", tag: "IIT Delhi", exp: "12 yrs", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
  { name: "Dr. Sneha Rao", role: "Biology — NEET", tag: "AIIMS Delhi", exp: "15 yrs", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop" },
  { name: "Vikram Bansal", role: "Physics — NEET", tag: "IIT Kanpur", exp: "14 yrs", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Aditi Verma", role: "Foundation Head", tag: "NIT Trichy", exp: "10 yrs", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
  { name: "Sameer Khanna", role: "Chemistry — NEET", tag: "IIT Roorkee", exp: "16 yrs", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop" },
  { name: "Neha Patel", role: "Math Faculty", tag: "IIT Bombay", exp: "11 yrs", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop" },
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function FacultyPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="hero-gradient py-section-gap">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Mentors Who <span className="text-primary italic">Deliver Ranks</span>
            </h1>
            <p className="mt-md text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Our 200+ faculty include IITians, medical professionals, and veteran educators — each mentored by outcomes, not slides.
            </p>
          </div>
        </section>

        <section className="py-section-gap">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
            {FACULTY.map((f) => (
              <article key={f.name} className="bg-white rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden bg-surface-container-low">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-md">
                  <h3 className="font-bold">{f.name}</h3>
                  <p className="text-sm text-on-surface-variant">{f.role}</p>
                  <div className="flex flex-wrap gap-xs mt-sm">
                    <span className="text-xs bg-primary/10 text-primary px-sm py-xs rounded-full font-semibold">{f.tag}</span>
                    <span className="text-xs bg-secondary/10 text-secondary px-sm py-xs rounded-full font-semibold">{f.exp}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-gutter mb-section-gap">
          <div className="bg-surface-container-highest rounded-xl p-xl md:p-section-gap text-center">
            <Icon name="school" className="text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight mt-sm">
              Want to learn from them?
            </h2>
            <p className="mt-md text-on-surface-variant max-w-xl mx-auto">
              Book a free demo and sit in a live class with any of our mentors.
            </p>
            <Link to="/contact" className="inline-block mt-lg bg-primary text-on-primary px-xl py-md rounded-lg font-bold hover:shadow-lg transition-all">
              Book Free Demo
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
