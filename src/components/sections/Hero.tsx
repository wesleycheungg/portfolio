import { motion } from "framer-motion";

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-56px)] flex items-center py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left column */}
        <div>
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="mb-6">
            <span className="text-xs uppercase tracking-label border border-border-subtle rounded-full px-3 py-1.5 text-content-tertiary inline-block">
              Software Engineer & SDET
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-5"
          >
            Building Quality
            <br />
            <span className="text-content-secondary">Into Every Layer</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-base text-content-secondary leading-relaxed mb-8 max-w-md"
          >
            I'm <strong className="text-content-primary font-medium">Wesley Cheung</strong>, a Software Engineer dedicated to building high-quality, user-centric web applications. SDET with 4+ years at Yahoo Sports.
          </motion.p>

          {/* Social icons */}
          <motion.div {...fadeUp(0.4)} className="flex gap-3 mb-8">
            <a
              href="https://www.github.com/wesleycheungg"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center border border-border-subtle rounded-md text-content-secondary hover:text-content-primary hover:border-content-secondary transition-colors"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/cheungwesley/"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center border border-border-subtle rounded-md text-content-secondary hover:text-content-primary hover:border-content-secondary transition-colors"
            >
              <LinkedInIcon />
            </a>
          </motion.div>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.5)} className="flex gap-4 flex-wrap">
                        <a
              href="#contact"
              className="px-6 py-3 bg-content-primary text-surface-primary text-xs font-medium uppercase tracking-label rounded-sm hover:opacity-80 transition-opacity"
            >
              Let's Connect
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-content-secondary text-surface-secondary text-xs font-medium uppercase tracking-label rounded-sm hover:opacity-80 transition-opacity"
            >
              Get Resume
            </a>
          </motion.div>
        </div>

        {/* Right column - Terminal code block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="bg-surface-secondary border border-border-subtle rounded-lg overflow-hidden"
        >
          {/* Terminal chrome */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-xs text-content-tertiary font-mono">Portfolio.ts</span>
            <div className="w-14" />
          </div>

          {/* Code */}
          <div className="p-6 font-mono text-sm text-content-secondary leading-loose">
            <div>
              <span className="text-content-tertiary">const</span> wes = {"{"}
            </div>
            <div className="pl-6">
              name: <span className="text-content-tertiary">'Wesley Cheung'</span>,
            </div>
            <div className="pl-6">
              focus: <span className="text-content-tertiary">'Quality Engineering'</span>,
            </div>
            <div className="pl-6">
              skills: [<span className="text-content-tertiary">'Playwright'</span>, <span className="text-content-tertiary">'React'</span>, <span className="text-content-tertiary">'Python'</span>],
            </div>
            <div className="pl-6">
              passionate: <span className="text-content-tertiary">true</span>,
            </div>
            <div className="pl-6">
              motto: <span className="text-content-tertiary">"Build with Purpose"</span>
            </div>
            <div>{"}"};   </div>
            <div className="mt-4">
              wes<span className="text-content-tertiary">.showcase();</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
