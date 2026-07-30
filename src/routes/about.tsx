import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Aspirant Study Centre — 15 Years of Government Exam Excellence" },
      { name: "description", content: "Learn about Aspirant Study Centre — our mission, values, and 15-year legacy of guiding civil service and government job aspirants to top ranks." },
      { property: "og:title", content: "About | Aspirant Study Centre" },
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
                Aspirant Study Centre is more than a coaching institute — it's a dedicated launchpad for civil servants, bank officers, and public administrators across India.
              </p>
            </div>
            <div className="flex items-center justify-center p-4 relative group">
              {/* Outer glowing aura */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-primary/30 via-secondary/25 to-primary/40 rounded-full blur-3xl animate-pulse group-hover:scale-110 group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-700 opacity-90" />

              {/* Card container with outer glow shadow */}
              <div className="relative bg-surface-container-lowest/80 glass-card p-6 sm:p-10 rounded-3xl border border-primary/30 shadow-[0_0_50px_rgba(2,132,199,0.3)] dark:shadow-[0_0_60px_rgba(56,189,248,0.25)] hover:shadow-[0_0_80px_rgba(2,132,199,0.5)] dark:hover:shadow-[0_0_90px_rgba(56,189,248,0.45)] hover:scale-105 transition-all duration-500 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Aspirant Study Centre Logo"
                  className="max-h-64 sm:max-h-72 w-auto object-contain drop-shadow-[0_0_20px_rgba(2,132,199,0.4)] dark:drop-shadow-[0_0_25px_rgba(56,189,248,0.5)]"
                />
              </div>
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
