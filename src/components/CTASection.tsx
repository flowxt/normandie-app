import Button from "./Button";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  variant?: "light" | "dark";
}

export default function CTASection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  variant = "light",
}: CTASectionProps) {
  const bgClasses =
    variant === "dark"
      ? "bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900"
      : "bg-gradient-to-br from-blue-50 via-white to-cyan-50";

  const titleClasses =
    variant === "dark" ? "text-white" : "text-gray-900";

  const subtitleClasses =
    variant === "dark" ? "text-blue-100" : "text-gray-600";

  return (
    <section className={`${bgClasses} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold tracking-tight ${titleClasses} sm:text-4xl`}>
            {title}
          </h2>
          <p className={`mx-auto mt-6 max-w-xl text-lg leading-8 ${subtitleClasses}`}>
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryButton.href} variant="accent">
              {primaryButton.text}
            </Button>
            {secondaryButton && (
              <Button
                href={secondaryButton.href}
                variant={variant === "dark" ? "outline" : "secondary"}
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

