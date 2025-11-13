import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "accent" | "outline";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    accent: "bg-amber-500 text-white hover:bg-amber-600",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-blue-600",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

