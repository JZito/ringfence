interface SectionShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionShell({ title, subtitle, children, className = "" }: SectionShellProps) {
  return (
    <section
      className={`bg-bg-card border border-border rounded-lg p-5 shadow-glow ${className}`}
    >
      <div className="mb-4">
        <h2 className="text-text-primary text-sm font-semibold uppercase tracking-wider">
          {title}
        </h2>
        {subtitle && (
          <p className="text-text-muted text-xs mt-1">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}
