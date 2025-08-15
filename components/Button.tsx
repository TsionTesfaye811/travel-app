"use client";

import React from "react";
import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  className?: string; // custom styles
};

const Button = ({
  type,
  title,
  icon,
  variant,
  full,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full ? "w-full" : "w-full sm:w-auto"
      } ${className || ""}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  );
};

export default Button;
