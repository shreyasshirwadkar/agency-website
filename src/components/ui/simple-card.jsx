"use client";

import React from "react";
import { cn } from "../../lib/utils";

export const SimpleCard = ({
  children,
  color = "#262626",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-md relative border border-r-0 border-b-0 border-slate-700 bg-custom-radial dark:border-neutral-800",
        className
      )}
      style={{ backgroundColor: color }}
      {...props}
    >
      {children}
    </div>
  );
};
