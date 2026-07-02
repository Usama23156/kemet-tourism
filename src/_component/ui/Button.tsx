import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-kemet-gold text-kemet-navy border-kemet-gold hover:bg-kemet-gold-light hover:border-kemet-gold-light shadow-gold",
  secondary:
    "bg-white text-kemet-gold border-white hover:border-kemet-gold hover:bg-white/90",
  outline:
    "bg-transparent text-kemet-gold border-kemet-gold/60 hover:bg-kemet-gold/10 hover:border-kemet-gold",
  ghost:
    "bg-transparent text-white border-transparent hover:bg-white/10 hover:text-kemet-gold",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full border-2 font-semibold transition-all duration-300 motion-safe:hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kemet-gold ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
