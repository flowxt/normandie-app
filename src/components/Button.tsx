import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "accent" | "outline" | "outline-dark";
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
    primary: "bg-gradient-to-r from-[#1e3771] to-[#0d6c8a] text-white hover:from-[#0c233c] hover:to-[#1e3771]",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    accent: "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 font-bold shadow-lg hover:shadow-amber-500/50",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-[#0d6c8a]",
    "outline-dark":
      "border-2 border-[#2998a6] text-[#0d6c8a] hover:bg-gradient-to-r hover:from-[#1e3771] hover:to-[#0d6c8a] hover:text-white bg-white hover:border-transparent",
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

