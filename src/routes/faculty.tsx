import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty | Aspirant Study Center — Senior Mentors & Directors" },
      { name: "description", content: "Meet our senior leadership and expert faculty guiding aspirants to top ranks in SSC, Banking, Railways, and State PSCs." },
      { property: "og:title", content: "Faculty | Aspirant Study Center" },
      { property: "og:description", content: "Meet the mentors behind our top government selection ranks." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FacultyPage,
});

function Icon({ name, className = "", style }: { name: string; className?: string; style?: React.CSSProperties }) {
  return <span className={`material-symbols-outlined ${className}`} style={style}>{name}</span>;
}

const CHIEF_MENTORS = [
  {
    name: "Sir",
    title: "Chief Academic Director & GS Lead",
    img: "/sir.png",
    tag: "18+ Years Experience",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    desc: "Veteran educator and strategy architect with nearly two decades of experience mentoring thousands of successful candidates in General Studies, Indian Polity, and Governance.",
    highlights: [
      "Mentored 15,000+ Selected Aspirants",
      "Expert in General Studies & Exam Strategy",
      "Author of Strategy & Polity Compilations",
    ],
    subjects: ["General Studies", "Indian Polity", "Governance & Ethics", "Mains Strategy"],
  },
  {
    name: "Mam",
    title: "Director of Academics & Aptitude Specialist",
    img: "/mam.png",
    tag: "15+ Years Experience",
    badgeColor: "bg-secondary/10 text-secondary border-secondary/20",
    desc: "Renowned aptitude specialist and academic director, famous for innovative speed-maths techniques, logical reasoning frameworks, and comprehensive current affairs guidance.",
    highlights: [
      "Pioneer in Speed & Accuracy Modules",
      "Head of Test Series & Evaluation Panel",
      "100% Exam-Oriented Pedagogy",
    ],
    subjects: ["Quantitative Aptitude", "Logical Reasoning", "Current Affairs", "Interview Guidance"],
  },
];

const DEPARTMENT_WINGS = [
  {
    icon: "gavel",
    title: "General Studies & Polity Wing",
    desc: "In-depth coverage of Indian Constitution, Polity, History, Economy, and Geography by subject-matter experts.",
    mentorsCount: "45+ Faculty",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: "calculate",
    title: "Quantitative Aptitude & CSAT Cell",
    desc: "Speed arithmetic, advanced mathematics, and data interpretation with shortcut technique workshops.",
    mentorsCount: "35+ Experts",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: "psychology",
    title: "Reasoning & Mental Ability Wing",
    desc: "Logical, analytical, and verbal reasoning drills crafted specifically for Tier-1 & Tier-2 pattern changes.",
    mentorsCount: "30+ Experts",
    color: "bg-tertiary/10 text-tertiary",
  },
  {
    icon: "translate",
    title: "English & Comprehension Faculty",
    desc: "Grammar foundation, vocabulary building, descriptive writing, and comprehension test strategies.",
    mentorsCount: "25+ Faculty",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: "newspaper",
    title: "Daily Current Affairs & Editorial Team",
    desc: "Round-the-clock editorial analyses, monthly compilations, and static GK integration.",
    mentorsCount: "20+ Analysts",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: "quiz",
    title: "Test Series & Answer Evaluation Cell",
    desc: "Dedicated panel evaluating student mocks with detailed personalized feedback within 24 hours.",
    mentorsCount: "40+ Evaluators",
    color: "bg-tertiary/10 text-tertiary",
  },
];

function FacultyPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Header Hero Section */}
        <section className="hero-gradient py-16 relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary px-3 py-1 bg-primary/10 rounded-full inline-block mb-4">
              World-Class Mentorship
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Meet Our{" "}
              <span className="relative inline-block mt-2 sm:mt-0">
                <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent italic animate-text-shimmer animate-glow-pulse inline-block pr-1">
                  Senior Leadership & Mentors
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full animate-pulse opacity-80" />
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Guided by veteran educators and academic directors with decades of combined experience in shaping top government examination selections across India.
            </p>
          </div>
        </section>

        {/* Featured Chief Mentors Section */}
        <section className="py-16 bg-surface-container-low transition-colors duration-300">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
                Chief Academic Leadership
              </h2>
              <p className="text-on-surface-variant mt-2 text-sm sm:text-base">
                Direct mentorship from the founders and academic heads behind Aspirant Study Center.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {CHIEF_MENTORS.map((m) => (
                <div
                  key={m.title}
                  className="bg-surface-container-lowest glass-card rounded-3xl border border-outline-variant/30 shadow-xl overflow-hidden group hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row"
                >
                  {/* Image Column */}
                  <div className="sm:w-5/12 relative overflow-hidden bg-gradient-to-b from-primary/5 to-primary/20 min-h-[320px] flex items-end justify-center">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Details Column */}
                  <div className="sm:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${m.badgeColor}`}>
                          {m.tag}
                        </span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-on-surface tracking-tight">{m.name}</h3>
                      <p className="text-sm font-semibold text-primary mt-1">{m.title}</p>
                      <p className="text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                        {m.desc}
                      </p>

                      <div className="mt-4 pt-4 border-t border-outline-variant/20">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                          Key Highlights
                        </h4>
                        <ul className="space-y-1.5">
                          {m.highlights.map((h, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs font-medium text-on-surface">
                              <Icon name="check_circle" className="text-emerald-500 text-sm" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-wrap gap-1.5">
                      {m.subjects.map((sub, i) => (
                        <span key={i} className="text-[11px] font-semibold bg-surface-container px-2.5 py-1 rounded-md border border-outline-variant/20 text-on-surface-variant">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Departments Overview */}
        <section className="py-16 bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
                Specialized Academic Wings
              </h2>
              <p className="text-on-surface-variant mt-2 text-sm sm:text-base">
                Powered by a dedicated team of over 200+ subject experts, analysts, and test evaluators across departments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEPARTMENT_WINGS.map((w) => (
                <div
                  key={w.title}
                  className="p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${w.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={w.icon} className="text-2xl" />
                      </div>
                      <span className="text-xs font-extrabold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-outline-variant/20">
                        {w.mentorsCount}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-on-surface mb-2">{w.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{w.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform duration-300">
                    <span>Comprehensive Exam Prep</span>
                    <Icon name="chevron_right" className="ml-1 text-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-container-max mx-auto px-gutter mb-16">
          <div className="bg-surface-container-highest rounded-2xl p-8 md:p-16 text-center relative overflow-hidden border border-outline-variant/30">
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                <Icon name="groups" className="text-3xl" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                Want 1-on-1 Guidance From Senior Faculty?
              </h2>
              <p className="mt-2 text-on-surface-variant max-w-xl text-sm sm:text-base">
                Book a personalized counseling and strategy session with our senior mentors to plan your government exam preparation roadmap.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
                >
                  Book Counseling Session
                </Link>
                <Link
                  to="/courses"
                  className="bg-surface-container-lowest text-primary border border-primary px-8 py-3.5 rounded-xl font-bold hover:bg-primary/10 transition-all"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
