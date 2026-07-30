import { Fragment, useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBYS44jWm-F-4bGcbh-qewTa-K4iH3__qSTbU1cy4PdLaSOffKTUOqPRIzj7EwlyaKj1SVW3R3Jl1N2MQjLzTfQOlTb_DR74GpbNkJPyyG8b3mkd417bB6lVEVM76vo4ImM1iGjEh3UoHL8INFqKXV1wmTttLqjrzcqOMsJKVtnLDjE8NJHLc2HarK91lDCy_Tx1l3iBLafH5KtBBXma_szMf_HooAm6zTXVOHsvdgIRJq8lGFYoDr3BKThc2AxkIxKQsfaiXp93wVd";

const TOPPERS = [
  { name: "Rahul Varma", rank: "AIR 05 - State PSC", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRscKVqy1x4Z9_AB0hARBxb7itb4BJz9_9IqWyva00SRMAELTpHrqVMjVtTj1xCK-g6rlvGbYMuCd5PTq4CpptEVGQC66PxqkAUVyTTdETWghESiLRmLoVmvchBuAiTYkcZ5i_Z1wklWx99J91CzesVD9mTz8BtTJOXeePc-Kropo5ZCTVxnqnjjVqWUoh6ErP02hR1PRMSOGCEYHrTXKDFxw4O7TE0Suvi1XfKCK7PP_ggLscnGbwDGqlDxJ7VawOmuX6iaIhsdg1" },
  { name: "Ananya Gupta", rank: "AIR 09 - SSC CGL", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo-kbUzGGpyXvdPMBIhGCFSzdHsiSrCtnmYimG0U4Q4WRvVH5zbfAvI8EFktdviKyEnAZgONGo0gzgWWHYhLot5K3wlG-smGR4vdoA2Od2ztdmKQ-LkD4QSOgxkhxte-HYNLEE2_lx2rIL7NNRg7imdwgu4UJO5EdRpBqrjLn1vzipnZ2DCdfyHEdvWNHpY-HSu4roJJiwcyYzjriwVCSeYLcbFVegheQTG4jAtTtBaaA90f_DomHTy9q8ipsOgUXeexhQXQ-3f6E6" },
  { name: "Ishaan Singh", rank: "AIR 23 - IBPS PO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvToKY8Q7aBzzIRVcF4l9PMIONANIjA0fiRczm0fJMZ7KzBEmosMHh_9UK_1IFVVcYtAbZaDLF1OxRkWk71o31quD8xo-zecgTdV-5YpaGIMWT8pj9QxCnNqlzMOetGEaaeUyEAz4Pa-AMrUFxr-q-ZRLggrRc-kU3raHCxdSzIVATadap9BK2gk1FPR8S29EE2frL1fT5ZwuqM4Bsy_5Ch-hvyuWBLtfHC4ceRVlly0QEPZ3_EeS1vHNglr6Q79mvzVHWx" },
];

const TESTIMONIALS = [
  { quote: "The GS strategy sessions and current affairs modules at Aspirant Study Center turned my exam preparation around. The faculty's insights on answer writing were invaluable.", name: "Karan Mehta", role: "State Administrative Officer, Batch '23", dot: "bg-primary/20" },
  { quote: "Cracking SSC CGL in my very first attempt was possible only because of the speed techniques and daily mock test series at Aspirant Study Center.", name: "Priya Sharma", role: "Excise Inspector (SSC CGL)", dot: "bg-secondary/20" },
  { quote: "The Quantitative Aptitude and Reasoning faculty helped me clear SBI PO with ease. The study material is precise, comprehensive, and exam-focused.", name: "Arjun Rawat", role: "SBI PO Officer", dot: "bg-tertiary-fixed/60" },
];

function Icon({ name, className = "", style }: { name: string; className?: string; style?: React.CSSProperties }) {
  return <span className={`material-symbols-outlined ${className}`} style={style}>{name}</span>;
}

function Stars() {
  return (
    <div className="flex gap-1 text-secondary mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" style={{ fontVariationSettings: "'FILL' 1" }} />
      ))}
    </div>
  );
}

function Typewriter({ phrases, speed = 70, delay = 2200 }: { phrases: string[]; speed?: number; delay?: number }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const nextText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      timer = setTimeout(() => {
        setText(nextText);
      }, isDeleting ? speed / 2 : speed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases, speed, delay]);

  return (
    <span className="inline">
      {text}
      <span className="inline-block w-[4px] h-[0.85em] bg-primary align-baseline ml-1 animate-pulse" />
    </span>
  );
}

function NumberScramble({ target = 12, suffix = "+", duration = 1600, intervalSpeed = 50 }: { target?: number; suffix?: string; duration?: number; intervalSpeed?: number }) {
  const [displayVal, setDisplayVal] = useState<number | string>(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= duration) {
        setDisplayVal(target);
        setIsFinished(true);
        clearInterval(interval);
      } else {
        const randomNum = Math.floor(Math.random() * 89) + 10;
        setDisplayVal(randomNum);
      }
    }, intervalSpeed);

    return () => clearInterval(interval);
  }, [target, duration, intervalSpeed]);

  return (
    <span className={`inline-block font-extrabold tracking-tight transition-all duration-300 ${!isFinished ? "text-secondary scale-105" : "text-primary scale-100"}`}>
      {displayVal}{suffix}
    </span>
  );
}

function Index() {
  return (
    <div className="bg-surface text-on-surface">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden hero-gradient pt-8 md:pt-16 pb-12">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 z-10 min-w-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface leading-tight tracking-tight min-h-[3.2em]">
                Master Your Future with{" "}
                <span className="text-primary italic">
                  <Typewriter
                    phrases={[
                      "Expert Government Exam Coaching",
                      "State PSC Mentorship",
                      "SSC CGL & Banking Preparation",
                      "Defence & Railways Guidance",
                    ]}
                  />
                </span>
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Specialized preparation for SSC, Banking, Railways, State PSC, and Defence exams with India's top officers & subject experts. We turn ambition into government service achievement through targeted guidance.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link to="/courses" className="bg-primary text-on-primary px-8 py-3.5 rounded-lg font-semibold text-sm shadow-lg hover:shadow-primary/20 active:scale-95 transition-all flex items-center gap-2">
                  Explore Courses <Icon name="arrow_forward" />
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl animate-pulse" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img alt="Students preparing for government competitive exams" className="w-full h-full object-cover aspect-[4/3]" src={HERO_IMG} />
              </div>
            </div>
          </div>

        </section>

        <section className="py-16 bg-surface-container-low transition-colors duration-300">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface tracking-tight">The Aspirant Advantage</h2>
              <p className="text-on-surface-variant mt-2">Why thousands of government service aspirants trust Aspirant Study Center for SSC, Banking & State PSC exams.</p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Bento Item 1: 12+ Years Experience (Merged from Top Section) */}
              <div className="md:col-span-6 lg:col-span-5 p-8 bg-surface-container-lowest glass-card rounded-2xl border border-outline-variant/30 shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-36 h-36 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300 mb-6">
                    <Icon name="workspace_premium" className="text-2xl" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-primary px-3 py-1 bg-primary/10 rounded-full inline-block mb-3">
                    Proven Legacy
                  </span>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      <NumberScramble target={12} suffix="+" />
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-on-surface">Years Experience</span>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base mt-3">
                    Over a decade of educational excellence, guiding thousands of dedicated aspirants through competitive government examinations.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform duration-300">
                  <span>Trusted by generations of toppers</span>
                  <Icon name="arrow_forward" className="ml-1.5 text-sm" />
                </div>
              </div>

              {/* Bento Item 2: Focused Batches */}
              <div className="md:col-span-6 lg:col-span-7 p-8 bg-surface-container-lowest glass-card rounded-2xl border border-outline-variant/30 shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:border-secondary/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-36 h-36 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all duration-500" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-300 mb-6">
                    <Icon name="groups" className="text-2xl" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-secondary px-3 py-1 bg-secondary/10 rounded-full inline-block mb-3">
                    Personalized Mentorship
                  </span>
                  <h3 className="text-2xl font-bold text-on-surface mb-3">Focused Batches</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                    Personalized guidance with dedicated answer-writing feedback and small batch sizes to ensure every student gets individual attention and mentorship.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-outline-variant/20 flex flex-wrap items-center gap-3 text-xs font-medium text-on-surface-variant">
                  <span className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20">
                    <Icon name="check_circle" className="text-secondary text-sm" /> Small Class Sizes
                  </span>
                  <span className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20">
                    <Icon name="check_circle" className="text-secondary text-sm" /> Answer Writing Practice
                  </span>
                </div>
              </div>

              {/* Bento Item 3: Result-Driven Approach */}
              <div className="md:col-span-6 lg:col-span-5 p-8 bg-surface-container-lowest glass-card rounded-2xl border border-outline-variant/30 shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:border-tertiary/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-36 h-36 bg-tertiary/10 rounded-full blur-2xl group-hover:bg-tertiary/20 transition-all duration-500" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors duration-300 mb-6">
                    <Icon name="star_rate" className="text-2xl" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-tertiary px-3 py-1 bg-tertiary/10 rounded-full inline-block mb-3">
                    Proven Outcomes
                  </span>
                  <h3 className="text-2xl font-bold text-on-surface mb-3">Result-Driven Approach</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                    Consistently producing top All India Ranks (AIR) in SSC CGL, IBPS PO, and State PSCs with exam-oriented methodologies.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs font-semibold text-tertiary">
                  <span>Consistent Top AIR Ranks</span>
                  <Icon name="trending_up" className="text-base" />
                </div>
              </div>

              {/* Bento Item 4: 24/7 Current Affairs & Doubt Resolution */}
              <div className="md:col-span-6 lg:col-span-7 p-8 bg-surface-container-lowest glass-card rounded-2xl border border-outline-variant/30 shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-36 h-36 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                      <Icon name="support_agent" className="text-2xl" />
                    </div>
                    <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      24/7 Active Support
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-primary px-3 py-1 bg-primary/10 rounded-full inline-block mb-3">
                    Continuous Guidance
                  </span>
                  <h3 className="text-2xl font-bold text-on-surface mb-3">24/7 Current Affairs & Doubt Resolution</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                    Stay updated with daily editorial analyses, monthly compilations, and round-the-clock doubt resolution for Prelims & Mains preparation.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-outline-variant/20 flex flex-wrap items-center gap-2 text-xs font-medium text-on-surface-variant">
                  <span className="bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20">Daily Editorials</span>
                  <span className="bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20">Monthly Compilations</span>
                  <span className="bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20">Instant Doubt Clearing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Faculty Showcase */}
        <section className="py-16 bg-surface-container-low transition-colors duration-300">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest font-extrabold text-primary px-3 py-1 bg-primary/10 rounded-full inline-block mb-3">
                Guiding Ambition To Success
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
                Meet Our Lead Faculty
              </h2>
              <p className="text-on-surface-variant mt-2 text-sm sm:text-base">
                Direct mentorship from senior educators with a proven track record of producing top AIR ranks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Sir */}
              <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-lg overflow-hidden flex flex-col sm:flex-row group hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                <div className="sm:w-1/2 bg-gradient-to-b from-primary/10 to-primary/20 flex items-center justify-center min-h-[260px] p-4 relative overflow-hidden">
                  <img src="/sir.png" alt="Sir - Chief Academic Director" className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                      18+ Yrs Exp
                    </span>
                    <h3 className="text-2xl font-bold text-on-surface mt-2">Sir</h3>
                    <p className="text-sm font-semibold text-primary">Chief Academic Director & GS Lead</p>
                    <p className="text-xs text-on-surface-variant mt-3 leading-relaxed">
                      Leading General Studies strategy, Indian Polity, and mentorship programs for aspirants across India.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-outline-variant/20">
                    <Link to="/faculty" className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Profile & Strategy <Icon name="arrow_forward" className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mam */}
              <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-lg overflow-hidden flex flex-col sm:flex-row group hover:shadow-2xl hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300">
                <div className="sm:w-1/2 bg-gradient-to-b from-secondary/10 to-secondary/20 flex items-center justify-center min-h-[260px] p-4 relative overflow-hidden">
                  <img src="/mam.png" alt="Mam - Director of Academics" className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20">
                      15+ Yrs Exp
                    </span>
                    <h3 className="text-2xl font-bold text-on-surface mt-2">Mam</h3>
                    <p className="text-sm font-semibold text-secondary">Director of Academics & Aptitude Lead</p>
                    <p className="text-xs text-on-surface-variant mt-3 leading-relaxed">
                      Specializing in Quant Aptitude speed techniques, Logical Reasoning, and overall academic excellence.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-outline-variant/20">
                    <Link to="/faculty" className="text-xs font-bold text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Profile & Strategy <Icon name="arrow_forward" className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary overflow-hidden relative transition-colors duration-300">
          <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-primary mb-12 tracking-tight">Our Hall of Fame</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {TOPPERS.map((t) => (
                <div key={t.name} className="flex flex-col items-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-secondary/30 p-1 bg-surface-container-lowest mb-3 shadow-md">
                    <img className="w-full h-full object-cover rounded-full" alt={t.name} src={t.img} />
                  </div>
                  <span className="text-on-primary font-bold">{t.rank}</span>
                  <span className="text-on-primary/80 text-sm">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 overflow-hidden bg-surface transition-colors duration-300">
          <div className="max-w-container-max mx-auto px-gutter">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12 tracking-tight">Voices of Excellence</h2>
            <div className="animate-marquee gap-6">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={i} className="min-w-[280px] sm:min-w-[350px] p-6 bg-surface-container-lowest rounded-lg border border-outline-variant/30 shadow-sm mr-6">
                  <Stars />
                  <p className="text-base italic text-on-surface-variant">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full ${t.dot}`} />
                    <div>
                      <h5 className="font-bold text-sm">{t.name}</h5>
                      <p className="text-xs text-on-surface-variant">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-gutter mb-16">
          <div className="bg-surface-container-highest rounded-xl p-8 md:p-16 text-center relative overflow-hidden transition-colors duration-300 border border-outline-variant/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-primary tracking-tight">Ready to serve the nation?</h2>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-xl">
                Join the ranks of successful government officers. Enroll now to secure your seat for upcoming exam preparation batches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
                <Link to="/courses" className="bg-primary text-on-primary px-8 py-3.5 rounded-lg font-bold shadow-lg hover:bg-primary/90 transition-all text-center">Enroll Now</Link>
                <Link to="/contact" className="bg-surface-container-lowest text-primary border border-primary px-8 py-3.5 rounded-lg font-bold hover:bg-primary/10 transition-all text-center">Contact Admission Cell</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
