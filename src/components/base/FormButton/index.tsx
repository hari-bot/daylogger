import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
}

function FromButton({
  type,
  onClick,
  className,
  children,
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border-2 font-semibold border-indigo-950 text-indigo-950 p-2 rounded-lg bg-transparent hover:bg-indigo-950 hover:text-white transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default FromButton;
