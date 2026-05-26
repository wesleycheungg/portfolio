import { FadeIn } from "@/components/ui/FadeIn";
import { featuredProjects } from "@/data/projects";
import type { Project } from "@/data/projects";

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-surface-secondary border border-border-subtle rounded-lg overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="aspect-video bg-surface-primary border-b border-border-subtle overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-content-tertiary text-xs font-mono">
            {project.subtitle}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold tracking-tight mb-1">{project.title}</h3>
        <p className="text-sm text-content-secondary leading-relaxed mb-4 flex-1 italic line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs border border-border-subtle rounded-sm px-2 py-0.5 text-content-secondary"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs text-content-tertiary self-center">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-xs border border-border-subtle rounded-sm py-2 text-content-secondary hover:text-content-primary hover:border-content-secondary transition-colors uppercase tracking-label"
            >
              <GlobeIcon />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-xs border border-border-subtle rounded-sm py-2 text-content-secondary hover:text-content-primary hover:border-content-secondary transition-colors uppercase tracking-label"
            >
              <CodeIcon />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="pb-20 scroll-mt-24">
      <FadeIn>
        {/* Section heading with lines */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-border-subtle" />
          <span className="text-sm font-medium px-5 py-2 bg-content-primary text-surface-primary rounded-full tracking-tight whitespace-nowrap">
            Projects Showcase
          </span>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>

        {/* Subheading */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-label text-content-tertiary mb-4">Portfolio</p>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            Featured <span className="text-content-secondary">Projects</span>
          </h2>
          <p className="text-base text-content-secondary max-w-lg mx-auto leading-relaxed">
            A selection of projects built with focus on quality, performance, and user experience.
          </p>
        </div>
      </FadeIn>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredProjects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
