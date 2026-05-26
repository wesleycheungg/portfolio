import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TechBadge } from "./TechBadge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-t border-border-subtle py-6 group">
      {/* Header row */}
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="text-base font-medium">{project.title}</h3>
        <span className="text-xs text-content-tertiary tracking-wide">
          {project.subtitle}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-content-secondary leading-relaxed max-w-xl mb-3">
        {project.description}
      </p>

      {/* Expandable details */}
      {project.details && project.details.length > 0 && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-content-tertiary hover:text-content-primary transition-colors mb-3"
          >
            {expanded ? "Less ↑" : "Details ↓"}
          </button>
          <AnimatePresence>
            {expanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="text-sm text-content-secondary leading-relaxed mb-3 pl-4 overflow-hidden"
              >
                {project.details.map((detail, i) => (
                  <li key={i} className="mb-1 before:content-['–'] before:mr-2 before:text-content-tertiary">
                    {detail}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-5">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-content-primary border-b border-border-subtle pb-px hover:border-content-primary transition-colors"
          >
            Live demo →
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-content-primary border-b border-border-subtle pb-px hover:border-content-primary transition-colors"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
}
