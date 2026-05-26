export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8 mt-12">
      <div className="max-w-2xl mx-auto px-5 flex justify-between items-center text-xs text-content-tertiary">
        <span>© {new Date().getFullYear()} Wes</span>
        <div className="flex gap-5">
          <a href="https://github.com/wesleycheungg" target="_blank" rel="noopener noreferrer" className="hover:text-content-primary transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/cheungwesley/" target="_blank" rel="noopener noreferrer" className="hover:text-content-primary transition-colors">
            LinkedIn
          </a>
          <a href="mailto:wesley.h.cheung@gmail.com" className="hover:text-content-primary transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
