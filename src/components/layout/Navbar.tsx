import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useDarkMode } from "@/hooks/useDarkMode";

const sections = ["about", "work", "projects", "contact"];

export function Navbar() {
  const activeId = useScrollSpy(sections);
  const { isDark, toggle } = useDarkMode();

  return (
    <header className="sticky top-0 z-50 bg-surface-primary/80 backdrop-blur-sm border-b border-border-subtle">
      <div className="max-w-5xl mx-auto px-8 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center justify-center w-8 h-8 rounded-sm bg-content-primary text-surface-primary text-[11px] font-semibold tracking-widest hover:opacity-80 transition-opacity">
          WC
        </a>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-[13px] transition-colors capitalize ${
                  activeId === id
                    ? "text-content-primary"
                    : "text-content-tertiary hover:text-content-primary"
                }`}
              >
                {id}
              </a>
            ))}
          </nav>
          <button
            onClick={toggle}
            className="text-content-tertiary hover:text-content-primary transition-colors text-sm"
            aria-label="Toggle dark mode"
          >
            {isDark ? "☀" : "●"}
          </button>
        </div>
      </div>
    </header>
  );
}
