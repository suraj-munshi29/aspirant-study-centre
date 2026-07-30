import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Aspirant Study Center — 15 Years of Government Exam Excellence" },
      { name: "description", content: "Learn about Aspirant Study Center — our mission, values, and 15-year legacy of guiding civil service and government job aspirants to top ranks." },
      { property: "og:title", content: "About | Aspirant Study Center" },
      { property: "og:description", content: "Our mission, values, and 15-year legacy of shaping government officers." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

const VALUES = [
  { icon: "flag", title: "Our Mission", desc: "Empower every government job aspirant with the mentorship, answer-writing skills, and strategy needed to excel in competitive exams." },
  { icon: "visibility", title: "Our Vision", desc: "Be India's most trusted institution for SSC, Banking, Railways, and State PSC preparation, built on integrity and outstanding selection ratios." },
  { icon: "handshake", title: "Our Values", desc: "Consistency, analytical rigor, and dedicated mentorship guide every classroom session, test evaluation, and study module." },
];

const TIMELINE = [
  { year: "2009", title: "Founded in Kota", desc: "Started with a vision to make top-tier government exam coaching accessible to every passionate aspirant." },
  { year: "2014", title: "Top 50 Ranks in Competitive Exams", desc: "Our students achieved top ranks in State PSC & SSC CGL, putting Aspirant Study Center on the national map." },
  { year: "2019", title: "50,000+ Selections", desc: "Expanded across Banking, SSC, Railways, and State PSC wings with specialized test evaluation labs." },
  { year: "2024", title: "15 Years of Trust", desc: "9 centers, 200+ ex-officers & subject experts, and a 98% qualification rate across major competitive exams." },
];

function AboutPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="hero-gradient py-16">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Shaping India's <span className="text-primary italic">Future Public Servants</span> Since 2009
              </h1>
              <p className="mt-4 text-base sm:text-lg text-on-surface-variant">
                Aspirant Study Center is more than a coaching institute — it's a dedicated launchpad for civil servants, bank officers, and public administrators across India.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "15+", l: "Years of Trust" },
                { v: "50k+", l: "Selected Candidates" },
                { v: "98%", l: "Qualification Rate" },
                { v: "9", l: "Dedicated Centers" },
              ].map((s) => (
                <div key={s.l} className="bg-surface-container-lowest rounded-xl p-6 text-center shadow-sm border border-outline-variant/30">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{s.v}</div>
                  <div className="text-xs font-semibold text-on-surface-variant tracking-wide mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-container-low transition-colors duration-300">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Icon name={v.icon} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-on-surface-variant text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container-max mx-auto px-gutter">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Our Journey</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TIMELINE.map((t) => (
                <div key={t.year} className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-sm">
                  <div className="text-primary font-bold text-2xl">{t.year}</div>
                  <h4 className="mt-2 font-semibold">{t.title}</h4>
                  <p className="mt-1 text-sm text-on-surface-variant">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-gutter mb-16">
          <div className="bg-primary text-on-primary rounded-xl p-8 md:p-16 text-center shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Come see what makes us different.</h2>
            <p className="mt-4 opacity-90 max-w-xl mx-auto">Explore our specialized course structure and meet our expert faculty to start your preparation.</p>
            <Link to="/courses" className="inline-block mt-6 bg-surface-container-lowest text-primary px-8 py-3.5 rounded-lg font-bold hover:shadow-lg transition-all">
              Explore Courses
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
