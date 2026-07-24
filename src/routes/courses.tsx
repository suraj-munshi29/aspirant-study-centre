import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses | Aspirant Study Center — JEE, NEET & Foundation" },
      { name: "description", content: "Explore JEE, NEET, and Foundation coaching programs at Aspirant Study Center — designed by top faculty for aspirants who aim high." },
      { property: "og:title", content: "Courses | Aspirant Study Center" },
      { property: "og:description", content: "JEE, NEET, and Foundation coaching programs for every aspirant." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CoursesPage,
});

const COURSES = [
  { icon: "engineering", title: "JEE (Main + Advanced)", tag: "2-Year Program", desc: "Comprehensive prep for IIT/NIT aspirants with weekly tests, DPP, and mentor mapping.", features: ["6 mock tests/month", "Live doubt cells", "IITian mentors"], color: "bg-primary/10 text-primary" },
  { icon: "vaccines", title: "NEET UG", tag: "2-Year Program", desc: "Structured Biology, Physics, and Chemistry roadmap aligned with the latest NTA pattern.", features: ["NCERT deep-dive", "Weekly NEET-pattern tests", "AIIMS alumni mentors"], color: "bg-secondary/10 text-secondary" },
  { icon: "school", title: "Foundation (Class 8-10)", tag: "Early Advantage", desc: "Builds strong conceptual roots in Science and Math for future JEE/NEET aspirants.", features: ["Olympiad prep", "NTSE guidance", "Small batches"], color: "bg-tertiary-container/50 text-tertiary" },
  { icon: "rocket_launch", title: "Crash Course", tag: "3-Month Sprint", desc: "Fast-track revision and test practice for repeaters and last-mile aspirants.", features: ["30+ mock tests", "Formula sheets", "1:1 doubt slots"], color: "bg-primary/10 text-primary" },
  { icon: "psychology", title: "Dropper Batch", tag: "1-Year Program", desc: "Full-time immersive program for JEE/NEET droppers with personalized study plans.", features: ["Daily targets", "Weekly parent reviews", "Peer study groups"], color: "bg-secondary/10 text-secondary" },
  { icon: "workspace_premium", title: "Scholarship Program", tag: "Merit Based", desc: "Up to 100% scholarships for top scorers of our national-level entrance test.", features: ["Nation-wide test", "Merit + means aid", "Fast-track admission"], color: "bg-tertiary-container/50 text-tertiary" },
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function CoursesPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="hero-gradient py-section-gap">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Programs Built for <span className="text-primary italic">Toppers</span>
            </h1>
            <p className="mt-md text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Pick the course that matches your goal. Every program is backed by expert faculty, structured content, and rigorous testing.
            </p>
          </div>
        </section>

        <section className="py-section-gap">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
            {COURSES.map((c) => (
              <article key={c.title} className="p-lg bg-white rounded-xl shadow-sm border border-outline-variant/30 flex flex-col gap-md hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${c.color}`}>
                  <Icon name={c.icon} />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest text-on-surface-variant">{c.tag.toUpperCase()}</span>
                  <h3 className="text-xl font-bold mt-xs">{c.title}</h3>
                </div>
                <p className="text-on-surface-variant text-sm">{c.desc}</p>
                <ul className="flex flex-col gap-xs mt-auto">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-sm text-sm">
                      <Icon name="check_circle" className="text-secondary" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-md bg-primary text-on-primary text-center px-lg py-sm rounded-lg text-sm font-semibold hover:shadow-md transition-all">
                  Enquire Now
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
