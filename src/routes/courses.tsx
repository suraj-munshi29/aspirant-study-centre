import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses | Aspirant Study Center — SSC, Banking, Railways & State PSC" },
      { name: "description", content: "Explore specialized Government Exam coaching programs for SSC CGL/CHSL, IBPS/SBI Banking, Railways, State PSC, and Defence exams." },
      { property: "og:title", content: "Government Exam Courses | Aspirant Study Center" },
      { property: "og:description", content: "SSC, Banking, Railways & State PSC coaching programs tailored for selection success." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CoursesPage,
});

const COURSES = [
  { icon: "gavel", title: "Administrative & Public Services", tag: "1 & 2-Year Foundation", desc: "Comprehensive GS Prelims + Mains syllabus coverage, CSAT, optional guidance, and rigorous answer-writing modules.", features: ["Daily Mains Answer Evaluation", "Monthly Current Affairs Mag", "Expert Officer Mentorship"], color: "bg-primary/10 text-primary" },
  { icon: "account_balance", title: "SSC CGL / CHSL", tag: "Target Batch", desc: "Complete Tier-1 & Tier-2 prep focusing on high-speed Quantitative tricks, Reasoning, English, and General Awareness.", features: ["50+ Full-Length Mock Tests", "Speed Maths Workshops", "Previous 10-Year Pyq Analysis"], color: "bg-secondary/10 text-secondary" },
  { icon: "payments", title: "Banking (IBPS / SBI PO & Clerk)", tag: "Speed & Accuracy", desc: "Intensive training for SBI PO, IBPS PO/Clerk, RRB, and LIC exams with daily sectional speed tests.", features: ["Sectional Speed Drills", "Banking Awareness & Economy", "Interview Guidance Panel"], color: "bg-tertiary-container/50 text-tertiary" },
  { icon: "train", title: "Railways (RRB NTPC & Group D)", tag: "Comprehensive", desc: "Targeted coverage of General Science, General Intelligence, Arithmetic, and Railway specific GK.", features: ["Science Numerical Mastery", "CBT-1 & CBT-2 Test Series", "Bilingual Study Material"], color: "bg-primary/10 text-primary" },
  { icon: "domain", title: "State PSC (State Civil Services)", tag: "State Focused", desc: "Dedicated preparation for State Public Service Commissions including State History, Geography, and State GK.", features: ["State-Specific GS Modules", "Regional Language Papers", "Mains Answer Writing"], color: "bg-secondary/10 text-secondary" },
  { icon: "shield", title: "Defence (NDA / CDS / AFCAT)", tag: "Armed Forces", desc: "Rigorous preparation for NDA, CDS, and AFCAT written examinations alongside SSB interview orientation.", features: ["SSB Physical & Psych Prep", "Mathematics & GAT Modules", "Mock Interviews"], color: "bg-tertiary-container/50 text-tertiary" },
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function CoursesPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="hero-gradient py-16">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Programs Built for <span className="text-primary italic">Future Officers</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Pick the target exam program that matches your career aspiration. Every course is crafted by top ex-officers, subject experts, and research analysts.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((c) => (
              <article key={c.title} className="p-6 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 flex flex-col gap-4 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${c.color}`}>
                  <Icon name={c.icon} />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest text-on-surface-variant">{c.tag.toUpperCase()}</span>
                  <h3 className="text-xl font-bold mt-1">{c.title}</h3>
                </div>
                <p className="text-on-surface-variant text-sm">{c.desc}</p>
                <ul className="flex flex-col gap-2 mt-auto pt-2">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Icon name="check_circle" className="text-secondary text-base shrink-0" /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-4 bg-primary text-on-primary text-center px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-md transition-all">
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
