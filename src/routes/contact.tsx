import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Aspirant Study Center — Book a Free Demo" },
      { name: "description", content: "Get in touch with Aspirant Study Center. Book a free demo class, ask about admissions, or visit our Kota campus." },
      { property: "og:title", content: "Contact | Aspirant Study Center" },
      { property: "og:description", content: "Book a free demo class or reach our admissions team." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function Icon({ name, className = "", style }: { name: string; className?: string; style?: React.CSSProperties }) {
  return <span className={`material-symbols-outlined ${className}`} style={style}>{name}</span>;
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="hero-gradient py-section-gap">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Let's <span className="text-primary italic">Talk</span>
            </h1>
            <p className="mt-md text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Our admission counselors are ready to help you pick the right program, schedule a demo, or answer any question.
            </p>
          </div>
        </section>

        <section className="py-section-gap">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-5 gap-lg">
            <div className="lg:col-span-2 flex flex-col gap-md">
              {[
                { icon: "location_on", title: "Visit Us", desc: "402, Aspirant Plaza, Education Valley, Kota, Rajasthan" },
                { icon: "call", title: "Call Us", desc: "+91 800-ASP-EDU (Mon-Sat, 9am-8pm)" },
                { icon: "mail", title: "Email", desc: "admissions@aspirantstudycenter.edu" },
                { icon: "schedule", title: "Office Hours", desc: "Monday – Saturday, 9:00 AM – 8:00 PM" },
              ].map((c) => (
                <div key={c.title} className="bg-white rounded-xl p-lg border border-outline-variant/30 shadow-sm flex gap-md">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name={c.icon} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold">{c.title}</h3>
                    <p className="text-sm text-on-surface-variant mt-xs break-words">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="lg:col-span-3 bg-white rounded-xl p-lg md:p-xl border border-outline-variant/30 shadow-sm flex flex-col gap-md"
            >
              <h2 className="text-2xl font-bold">Book a Free Demo</h2>
              <p className="text-sm text-on-surface-variant">Fill in your details and we'll get back within 24 hours.</p>

              {submitted ? (
                <div className="bg-secondary/10 border border-secondary/30 text-secondary rounded-lg p-md flex items-center gap-sm">
                  <Icon name="check_circle" /> Thanks! Our team will reach out shortly.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                    <label className="flex flex-col gap-xs text-sm">
                      Full Name
                      <input required className="border border-outline-variant rounded-lg px-md py-sm focus:outline-none focus:border-primary" />
                    </label>
                    <label className="flex flex-col gap-xs text-sm">
                      Phone
                      <input required type="tel" className="border border-outline-variant rounded-lg px-md py-sm focus:outline-none focus:border-primary" />
                    </label>
                  </div>
                  <label className="flex flex-col gap-xs text-sm">
                    Email
                    <input required type="email" className="border border-outline-variant rounded-lg px-md py-sm focus:outline-none focus:border-primary" />
                  </label>
                  <label className="flex flex-col gap-xs text-sm">
                    Interested Course
                    <select className="border border-outline-variant rounded-lg px-md py-sm focus:outline-none focus:border-primary">
                      <option>JEE (Main + Advanced)</option>
                      <option>NEET UG</option>
                      <option>Foundation (Class 8-10)</option>
                      <option>Crash Course</option>
                      <option>Dropper Batch</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-xs text-sm">
                    Message
                    <textarea rows={4} className="border border-outline-variant rounded-lg px-md py-sm focus:outline-none focus:border-primary" />
                  </label>
                  <button type="submit" className="bg-primary text-on-primary px-lg py-md rounded-lg font-semibold hover:shadow-lg transition-all">
                    Send Enquiry
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
