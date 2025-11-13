interface SectionHeadingProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  showLine?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  showLine = false,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-16`}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-4">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {showLine && (
        <div className={`mt-6 mb-6 ${centered ? "mx-auto" : ""} h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full`} />
      )}
      {subtitle && (
        <p className={`mt-6 text-lg leading-8 text-gray-600 ${centered ? "max-w-2xl mx-auto" : "max-w-3xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

