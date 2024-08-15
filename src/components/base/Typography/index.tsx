import React from "react";

type TypographyProps = {
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "body"
    | "caption";
  children: React.ReactNode;
  className?: string;
};

function Typography({
  variant = "body",
  children,
  className = "",
}: TypographyProps) {
  const baseClasses = "font-sans";
  const variantClasses = {
    heading1: "text-4xl font-bold mb-4",
    heading2: "text-3xl font-semibold mb-3",
    heading3: "text-2xl font-medium mb-2",
    heading4: "text-xl font-semibold",
    body: "text-base",
    caption: "text-sm text-gray-500",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return <div className={combinedClasses}>{children}</div>;
}

export default Typography;
