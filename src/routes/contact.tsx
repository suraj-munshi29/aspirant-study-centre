import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Aspirant Study Center — Government Exam Admissions" },
      { name: "description", content: "Get in touch with Aspirant Study Center. Inquire about SSC, Banking, Railways, State PSC & Defence exam coaching, or visit our campus." },
      { property: "og:title", content: "Contact | Aspirant Study Center" },
      { property: "og:description", content: "Reach our government exam admission counselors and faculty." },
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
        <section className="hero-gradient py-16">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Get In <span className="text-primary italic">Touch</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Our expert admission counselors are here to guide you through exam patterns, course schedules, and batch enrollments.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 flex flex-col gap-4">
              {[
                { icon: "location_on", title: "Visit Us", desc: "402, Aspirant Plaza, Education Valley, Kota, Rajasthan" },
                { icon: "call", title: "Call Us", desc: "+91 800-ASP-EDU (Mon-Sat, 9am-8pm)" },
                { icon: "mail", title: "Email", desc: "admissions@aspirantstudycenter.edu" },
                { icon: "schedule", title: "Office Hours", desc: "Monday – Saturday, 9:00 AM – 8:00 PM" },
              ].map((c) => (
                <div key={c.title} className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-sm flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name={c.icon} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold">{c.title}</h3>
                    <p className="text-sm text-on-surface-variant mt-1 break-words">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="lg:col-span-3 bg-surface-container-lowest rounded-xl p-6 md:p-10 border border-outline-variant/30 shadow-sm flex flex-col gap-5"
            >
              <h2 className="text-2xl font-bold">Admission & Course Enquiry</h2>
              <p className="text-sm text-on-surface-variant">Fill in your details and our senior counselor will contact you within 24 hours.</p>

              {submitted ? (
                <div className="bg-secondary/10 border border-secondary/30 text-secondary rounded-lg p-4 flex items-center gap-3">
                  <Icon name="check_circle" /> Thanks! Our admissions team will reach out shortly.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-1.5 text-sm font-medium">
                      Full Name
                      <input required className="bg-surface-container-low text-on-surface border border-outline-variant/50 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary" placeholder="Enter your full name" />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm font-medium">
                      Phone Number
                      <input required type="tel" className="bg-surface-container-low text-on-surface border border-outline-variant/50 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary" placeholder="10-digit phone number" />
                    </label>
                  </div>
                  <label className="flex flex-col gap-1.5 text-sm font-medium">
                    Email Address
                    <input required type="email" className="bg-surface-container-low text-on-surface border border-outline-variant/50 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary" placeholder="name@example.com" />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm font-medium">
                    Target Government Exam
                    <select className="bg-surface-container-low text-on-surface border border-outline-variant/50 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary">
                      <option>Administrative & Public Services</option>
                      <option>SSC CGL / CHSL</option>
                      <option>Banking (IBPS / SBI PO & Clerk)</option>
                      <option>Railways (RRB NTPC & Group D)</option>
                      <option>State PSC (State Civil Services)</option>
                      <option>Defence Exams (NDA / CDS)</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm font-medium">
                    Message / Queries
                    <textarea rows={4} className="bg-surface-container-low text-on-surface border border-outline-variant/50 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary" placeholder="Tell us about your target exam year or specific questions..." />
                  </label>
                  <button type="submit" className="bg-primary text-on-primary px-8 py-3.5 rounded-lg font-semibold hover:shadow-lg transition-all text-center">
                    Submit Enquiry
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
