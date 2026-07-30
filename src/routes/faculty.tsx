import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty | Aspirant Study Center — Ex-Officers & Veteran Mentors" },
      { name: "description", content: "Meet the ex-civil servants, senior GS faculty, and aptitude experts who guide aspirants to top ranks in UPSC, SSC, Banking, and State PSCs." },
      { property: "og:title", content: "Faculty | Aspirant Study Center" },
      { property: "og:description", content: "Meet the mentors behind our top government selection ranks." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FacultyPage,
});

const FACULTY = [
  { name: "Dr. Anil Kapoor", role: "HOD — General Studies (UPSC)", tag: "Ex-Civil Services Mentor", exp: "20+ yrs", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
  { name: "Prof. Meera Iyer", role: "Polity & Indian Economy", tag: "Ex-RBI Officer", exp: "18 yrs", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
  { name: "Rajat Sinha", role: "Quant Aptitude Lead (SSC/Banking)", tag: "M.Sc Mathematics", exp: "12 yrs", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
  { name: "Dr. Sneha Rao", role: "History & Geography Specialist", tag: "Ph.D. History", exp: "15 yrs", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop" },
  { name: "Vikram Bansal", role: "Reasoning & CSAT Guru", tag: "Ex-Banking Specialist", exp: "14 yrs", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Aditi Verma", role: "English & Essay Evaluator", tag: "M.A. English Lit", exp: "10 yrs", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
  { name: "Sameer Khanna", role: "General Science & Tech", tag: "M.Tech", exp: "16 yrs", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop" },
  { name: "Neha Patel", role: "Current Affairs & State GK", tag: "Former Public Servant", exp: "11 yrs", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop" },
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function FacultyPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="hero-gradient py-16">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Mentors Who <span className="text-primary italic">Deliver Selections</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Our 200+ faculty include former public servants, subject-matter scholars, and veteran exam analysts — each focused on exam results and student success.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY.map((f) => (
              <article key={f.name} className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden bg-surface-container-low">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{f.name}</h3>
                  <p className="text-sm text-on-surface-variant mt-0.5">{f.role}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-semibold">{f.tag}</span>
                    <span className="text-xs bg-secondary/10 text-secondary px-2.5 py-1 rounded-full font-semibold">{f.exp}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-gutter mb-16">
          <div className="bg-surface-container-highest rounded-xl p-8 md:p-16 text-center">
            <Icon name="school" className="text-primary text-4xl" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight mt-2">
              Want to learn from expert officers & mentors?
            </h2>
            <p className="mt-4 text-on-surface-variant max-w-xl mx-auto">
              Get guided by faculty who have helped thousands of candidates secure government posts.
            </p>
            <Link to="/contact" className="inline-block mt-6 bg-primary text-on-primary px-8 py-3.5 rounded-lg font-bold hover:shadow-lg transition-all">
              Contact Admissions
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
