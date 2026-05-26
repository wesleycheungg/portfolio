interface TechBadgeProps {
  label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="text-xs text-content-secondary border border-border-subtle px-2.5 py-1 rounded">
      {label}
    </span>
  );
}
