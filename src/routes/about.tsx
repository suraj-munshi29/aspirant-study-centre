import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Aspirant Study Center — 15 Years of Excellence" },
      { name: "description", content: "Learn about Aspirant Study Center — our mission, values, and 15-year legacy of shaping JEE and NEET toppers." },
      { property: "og:title", content: "About | Aspirant Study Center" },
      { property: "og:description", content: "Our mission, values, and 15-year legacy of shaping toppers." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

const VALUES = [
  { icon: "flag", title: "Our Mission", desc: "Empower every aspirant with the mentorship, resources, and mindset needed to crack India's toughest exams." },
  { icon: "visibility", title: "Our Vision", desc: "Be the most trusted institution for JEE and NEET preparation, known for integrity and outstanding outcomes." },
  { icon: "handshake", title: "Our Values", desc: "Discipline, empathy, and academic excellence guide every classroom, mentor session, and study plan." },
];

const TIMELINE = [
  { year: "2009", title: "Founded in Kota", desc: "Started with a single classroom and a promise: no student is left behind." },
  { year: "2014", title: "First AIR Under 100", desc: "Our student's Top-50 rank put Aspirant Study Center on the national map." },
  { year: "2019", title: "50,000 Students Trained", desc: "Expanded to a dedicated NEET wing and Foundation program." },
  { year: "2024", title: "15 Years Strong", desc: "9 centers, 200+ faculty, and a 98% qualification rate across flagship programs." },
];

function AboutPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="hero-gradient py-section-gap">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Shaping India's <span className="text-primary italic">Brightest Minds</span> Since 2009
              </h1>
              <p className="mt-md text-base sm:text-lg text-on-surface-variant">
                Aspirant Study Center is more than a coaching institute — it's a community of mentors, students, and alumni pushing each other to be the best.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-md">
              {[
                { v: "15+", l: "Years" },
                { v: "50k+", l: "Alumni" },
                { v: "98%", l: "Success" },
                { v: "9", l: "Centers" },
              ].map((s) => (
                <div key={s.l} className="bg-white rounded-xl p-lg text-center shadow-sm border border-outline-variant/30">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{s.v}</div>
                  <div className="text-xs font-semibold text-on-surface-variant tracking-wide mt-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-section-gap bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-lg">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-lg border border-outline-variant/30 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Icon name={v.icon} />
                </div>
                <h3 className="mt-md text-xl font-semibold">{v.title}</h3>
                <p className="mt-sm text-on-surface-variant text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-section-gap">
          <div className="max-w-container-max mx-auto px-gutter">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Our Journey</h2>
            <div className="mt-xl grid gap-lg sm:grid-cols-2 lg:grid-cols-4">
              {TIMELINE.map((t) => (
                <div key={t.year} className="bg-white rounded-xl p-lg border border-outline-variant/30 shadow-sm">
                  <div className="text-primary font-bold text-2xl">{t.year}</div>
                  <h4 className="mt-sm font-semibold">{t.title}</h4>
                  <p className="mt-xs text-sm text-on-surface-variant">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-gutter mb-section-gap">
          <div className="bg-primary text-on-primary rounded-xl p-xl md:p-section-gap text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Come see what makes us different.</h2>
            <p className="mt-md opacity-90 max-w-xl mx-auto">Book a free demo class and experience the Aspirant Study Center classroom firsthand.</p>
            <Link to="/contact" className="inline-block mt-lg bg-white text-primary px-xl py-md rounded-lg font-bold hover:shadow-lg transition-all">
              Book Free Demo
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
