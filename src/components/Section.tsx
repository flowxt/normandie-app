interface SectionProps {
  children: React.ReactNode;
  background?: "white" | "gray";
  className?: string;
}

export default function Section({
  children,
  background = "white",
  className = "",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
  };

  return (
    <section className={`${bgClasses[background]} py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

