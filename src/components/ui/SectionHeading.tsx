interface SectionHeadingProps {
  label: string;
}

export function SectionHeading({ label }: SectionHeadingProps) {
  return (
    <h2 className="text-xs uppercase tracking-label text-content-tertiary mb-8">
      {label}
    </h2>
  );
}
