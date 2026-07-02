import { type ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
};

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function GlassCard({
  children,
  className = "",
  hover = false,
  padding = "md",
}: GlassCardProps) {
  return (
    <div
      className={`glass-panel rounded-2xl ${paddingClasses[padding]} ${
        hover
          ? "motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:border-kemet-gold/50 motion-safe:hover:shadow-gold"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
