import { Fragment } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBYS44jWm-F-4bGcbh-qewTa-K4iH3__qSTbU1cy4PdLaSOffKTUOqPRIzj7EwlyaKj1SVW3R3Jl1N2MQjLzTfQOlTb_DR74GpbNkJPyyG8b3mkd417bB6lVEVM76vo4ImM1iGjEh3UoHL8INFqKXV1wmTttLqjrzcqOMsJKVtnLDjE8NJHLc2HarK91lDCy_Tx1l3iBLafH5KtBBXma_szMf_HooAm6zTXVOHsvdgIRJq8lGFYoDr3BKThc2AxkIxKQsfaiXp93wVd";

const TOPPERS = [
  { name: "Rahul Varma", rank: "AIR 14 - JEE", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRscKVqy1x4Z9_AB0hARBxb7itb4BJz9_9IqWyva00SRMAELTpHrqVMjVtTj1xCK-g6rlvGbYMuCd5PTq4CpptEVGQC66PxqkAUVyTTdETWghESiLRmLoVmvchBuAiTYkcZ5i_Z1wklWx99J91CzesVD9mTz8BtTJOXeePc-Kropo5ZCTVxnqnjjVqWUoh6ErP02hR1PRMSOGCEYHrTXKDFxw4O7TE0Suvi1XfKCK7PP_ggLscnGbwDGqlDxJ7VawOmuX6iaIhsdg1" },
  { name: "Ananya Gupta", rank: "AIR 09 - NEET", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo-kbUzGGpyXvdPMBIhGCFSzdHsiSrCtnmYimG0U4Q4WRvVH5zbfAvI8EFktdviKyEnAZgONGo0gzgWWHYhLot5K3wlG-smGR4vdoA2Od2ztdmKQ-LkD4QSOgxkhxte-HYNLEE2_lx2rIL7NNRg7imdwgu4UJO5EdRpBqrjLn1vzipnZ2DCdfyHEdvWNHpY-HSu4roJJiwcyYzjriwVCSeYLcbFVegheQTG4jAtTtBaaA90f_DomHTy9q8ipsOgUXeexhQXQ-3f6E6" },
  { name: "Ishaan Singh", rank: "AIR 42 - JEE", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvToKY8Q7aBzzIRVcF4l9PMIONANIjA0fiRczm0fJMZ7KzBEmosMHh_9UK_1IFVVcYtAbZaDLF1OxRkWk71o31quD8xo-zecgTdV-5YpaGIMWT8pj9QxCnNqlzMOetGEaaeUyEAz4Pa-AMrUFxr-q-ZRLggrRc-kU3raHCxdSzIVATadap9BK2gk1FPR8S29EE2frL1fT5ZwuqM4Bsy_5Ch-hvyuWBLtfHC4ceRVlly0QEPZ3_EeS1vHNglr6Q79mvzVHWx" },
];

const TESTIMONIALS = [
  { quote: "The faculty at Aspirant Study Center doesn't just teach subjects; they teach how to think. The doubt sessions were a lifesaver for my JEE advanced prep.", name: "Karan Mehta", role: "IIT Delhi, Batch of '23", dot: "bg-primary/20" },
  { quote: "From foundation in 9th to NEET coaching in 12th, Aspirant Study Center has been my second home. Highly recommend for medical aspirants!", name: "Priya Sharma", role: "AIIMS Delhi Student", dot: "bg-secondary/20" },
  { quote: "The study material is unmatched. It's concise, comprehensive, and exactly what is needed for current competitive patterns.", name: "Arjun Rawat", role: "BITS Pilani Student", dot: "bg-tertiary-fixed/60" },
];

function Icon({ name, className = "", style }: { name: string; className?: string; style?: React.CSSProperties }) {
  return <span className={`material-symbols-outlined ${className}`} style={style}>{name}</span>;
}

function Stars() {
  return (
    <div className="flex gap-xs text-secondary mb-md">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" style={{ fontVariationSettings: "'FILL' 1" }} />
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="bg-surface text-on-surface">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden hero-gradient pt-xl md:pt-section-gap">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div className="flex flex-col gap-lg z-10 min-w-0">
              <div className="inline-flex items-center gap-sm px-md py-xs bg-secondary-container/20 rounded-full w-fit border border-secondary-container/30">
                <Icon name="verified" className="text-secondary" style={{ fontSize: 18 }} />
                <span className="text-xs font-semibold text-secondary tracking-widest">ADMISSIONS OPEN 2024-25</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-on-surface leading-tight tracking-tight">
                Master Your Future with <span className="text-primary italic">Expert Coaching</span>
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Specialized preparation for JEE, NEET, and Foundation courses with India's top faculty. We turn ambition into achievement through rigorous guidance.
              </p>
              <div className="flex flex-wrap gap-md mt-sm">
                <Link to="/courses" className="bg-primary text-on-primary px-xl py-md rounded-lg font-semibold text-sm shadow-lg hover:shadow-primary/20 active:scale-95 transition-all flex items-center gap-sm">
                  Explore Courses <Icon name="arrow_forward" />
                </Link>
                <Link to="/contact" className="bg-tertiary-container text-on-tertiary-fixed-variant px-xl py-md rounded-lg font-semibold text-sm hover:bg-tertiary-fixed transition-all border border-tertiary/10 active:scale-95">
                  Book a Demo Class
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl animate-pulse" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img alt="Students studying" className="w-full h-full object-cover aspect-[4/3]" src={HERO_IMG} />
              </div>
            </div>
          </div>

          <div className="max-w-container-max mx-auto px-gutter mt-xl md:mt-section-gap pb-lg">
            <div className="bg-surface-container-lowest glass-card rounded-xl shadow-md p-lg flex flex-wrap justify-between items-center gap-lg border border-outline-variant/20">
              {[
                { v: "15+", l: "Years Experience", c: "text-primary" },
                { v: "50k+", l: "Students Trained", c: "text-primary" },
                { v: "98%", l: "Success Rate", c: "text-secondary" },
                { v: "200+", l: "Expert Faculty", c: "text-primary" },
              ].map((s, i, arr) => (
                <Fragment key={s.l}>
                  <div className="flex flex-col items-center flex-1 min-w-[120px]">
                    <span className={`text-2xl sm:text-3xl font-bold ${s.c}`}>{s.v}</span>
                    <span className="text-xs font-semibold text-on-surface-variant tracking-wide mt-1 text-center">{s.l}</span>
                  </div>
                  {i < arr.length - 1 && <div className="w-px h-12 bg-outline-variant/30 hidden md:block" />}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="py-section-gap bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto mb-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface tracking-tight">The Aspirant Advantage</h2>
              <p className="text-on-surface-variant mt-sm">Why thousands of top-rankers trust Aspirant Study Center for their career milestones.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {[
                { icon: "school", title: "Expert Faculty", desc: "Mentorship from IITians and Medical Professionals with decades of coaching experience.", bg: "bg-primary/10", color: "text-primary" },
                { icon: "groups", title: "Small Batches", desc: "Personalized attention guaranteed with a low student-to-teacher ratio.", bg: "bg-secondary/10", color: "text-secondary" },
                { icon: "star_rate", title: "Result Oriented", desc: "A track record of producing city toppers and top AIR ranks consistently.", bg: "bg-tertiary-container/30", color: "text-tertiary" },
              ].map((f) => (
                <div key={f.title} className="p-lg bg-white rounded-lg shadow-sm border border-outline-variant/30 flex flex-col gap-md hover:bg-primary hover:text-on-primary group transition-all">
                  <div className={`w-12 h-12 ${f.bg} rounded-lg flex items-center justify-center group-hover:bg-white/20`}>
                    <Icon name={f.icon} className={`${f.color} group-hover:text-white`} />
                  </div>
                  <h4 className="text-xl font-semibold">{f.title}</h4>
                  <p className="text-on-surface-variant group-hover:text-on-primary/80">{f.desc}</p>
                </div>
              ))}
              <div className="p-lg bg-white rounded-lg shadow-sm border border-outline-variant/30 flex flex-col gap-md md:col-span-3 hover:bg-secondary hover:text-on-secondary group transition-all">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-lg">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-white/20 flex-shrink-0">
                    <Icon name="support_agent" className="text-secondary" style={{ fontSize: 32 }} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">24/7 Doubt Sessions</h4>
                    <p className="text-on-surface-variant group-hover:text-on-secondary/80 mt-sm">
                      Never stay stuck. Our dedicated doubt-clearance app and in-person labs are available round the clock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl bg-primary overflow-hidden relative">
          <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-primary mb-xl tracking-tight">Our Hall of Fame</h2>
            <div className="flex flex-wrap justify-center gap-xl">
              {TOPPERS.map((t) => (
                <div key={t.name} className="flex flex-col items-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-secondary-container p-1 bg-white mb-md">
                    <img className="w-full h-full object-cover rounded-full" alt={t.name} src={t.img} />
                  </div>
                  <span className="text-on-primary font-bold">{t.rank}</span>
                  <span className="text-primary-fixed-dim text-sm">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-section-gap overflow-hidden bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-xl tracking-tight">Voices of Excellence</h2>
            <div className="animate-marquee gap-lg">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={i} className="min-w-[280px] sm:min-w-[350px] p-lg bg-white rounded-lg border border-outline-variant/30 shadow-sm mr-lg">
                  <Stars />
                  <p className="text-base italic text-on-surface-variant">"{t.quote}"</p>
                  <div className="mt-xl flex items-center gap-md">
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

        <section className="max-w-container-max mx-auto px-gutter mb-section-gap">
          <div className="bg-surface-container-highest rounded-xl p-xl md:p-section-gap text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            <div className="relative z-10 flex flex-col items-center gap-md">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-primary tracking-tight">Ready to start your journey?</h2>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-xl">
                Join the ranks of winners. Enroll now to secure your seat for the next academic session.
              </p>
              <div className="flex flex-col sm:flex-row gap-md mt-lg w-full sm:w-auto">
                <Link to="/courses" className="bg-primary text-on-primary px-xl py-md rounded-lg font-bold shadow-lg hover:bg-primary-container transition-all text-center">Enroll Now</Link>
                <Link to="/contact" className="bg-white text-primary border border-primary px-xl py-md rounded-lg font-bold hover:bg-primary/5 transition-all text-center">Contact Admission Cell</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
