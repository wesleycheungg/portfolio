import { FadeIn } from "@/components/ui/FadeIn";

function MessageIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MailLabelIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const inputClass =
  "w-full bg-surface-secondary border border-border-subtle rounded-md px-4 py-3 text-sm text-content-primary placeholder:text-content-tertiary focus:outline-none focus:border-content-secondary transition-colors";

export function Contact() {
  return (
    <section id="contact" className="pb-20 scroll-mt-24">
      <FadeIn>
        {/* Section heading with lines */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-border-subtle" />
          <span className="text-sm font-medium px-5 py-2 bg-content-primary text-surface-primary rounded-full tracking-tight whitespace-nowrap">
            Get In Touch
          </span>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>

        {/* Centered subheading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 text-content-tertiary">
            <MessageIcon />
            <span className="text-xs uppercase tracking-label">Communication</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            Let's <span className="text-content-secondary">Connect</span>
          </h2>
          <p className="text-base text-content-secondary max-w-md mx-auto leading-relaxed">
            Open to SDET, QA automation, and full-stack opportunities. I'm always happy to discuss new ideas or just say hi.
          </p>
        </div>
      </FadeIn>

      {/* Two-column layout */}
      <FadeIn delay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Left: form */}
          <div className="bg-surface-secondary border border-border-subtle rounded-lg p-8">
            <h3 className="text-lg font-semibold tracking-tight mb-1">Send a Message</h3>
            <p className="text-sm text-content-secondary mb-8">
              I'll get back to you within 24 hours.
            </p>

            <form
              action="https://formsubmit.co/wesley.h.cheung@gmail.com"
              method="POST"
              className="space-y-5"
            >
              {/* Honeypot */}
              <input type="text" name="_honey" className="hidden" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="flex items-center gap-1.5 text-xs uppercase tracking-label text-content-tertiary mb-2">
                  <UserIcon />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs uppercase tracking-label text-content-tertiary mb-2">
                  <MailLabelIcon />
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs uppercase tracking-label text-content-tertiary mb-2">
                  <MessageIcon />
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-content-primary text-surface-primary text-xs font-medium uppercase tracking-label rounded-sm hover:opacity-80 transition-opacity"
              >
                Send Message
                <SendIcon />
              </button>
            </form>
          </div>

          {/* Right: direct contact */}
          <div>
            <h3 className="text-base font-semibold tracking-tight mb-4">Direct Contact</h3>
            <div className="space-y-3">
              <div className="bg-surface-secondary border border-border-subtle rounded-lg p-4 flex items-center gap-4">
                <div className="w-9 h-9 flex items-center justify-center border border-border-subtle rounded-md text-content-tertiary shrink-0">
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-label text-content-tertiary mb-0.5">Email</p>
                  <a
                    href="mailto:wesley.h.cheung@gmail.com"
                    className="text-sm text-content-primary hover:text-content-secondary transition-colors"
                  >
                    wesley.h.cheung@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-surface-secondary border border-border-subtle rounded-lg p-4 flex items-center gap-4">
                <div className="w-9 h-9 flex items-center justify-center border border-border-subtle rounded-md text-content-tertiary shrink-0">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-label text-content-tertiary mb-0.5">Location</p>
                  <p className="text-sm text-content-primary">Santa Barbara, CA / Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
