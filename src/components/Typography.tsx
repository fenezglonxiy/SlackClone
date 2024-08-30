"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl lg:text-5xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      body: "",
    },
    fontWeight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
  },
  defaultVariants: {
    variant: "body",
    fontWeight: "normal",
  },
});

const typographyMappings = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
} as const;

type TypographyMappingValues =
  (typeof typographyMappings)[keyof typeof typographyMappings];

export type TypographyProps = VariantProps<typeof typographyVariants> &
  React.HTMLAttributes<HTMLElement> & {
    as?: "span" | "div" | TypographyMappingValues;
  };

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ variant, fontWeight, className, as: asFromProps, ...props }, ref) => {
    const CompFromFontSize =
      typographyMappings[
        variant as NonNullable<keyof typeof typographyMappings>
      ];

    const Comp = asFromProps !== undefined ? asFromProps : CompFromFontSize;

    return (
      <Comp
        ref={ref}
        className={cn(typographyVariants({ variant, fontWeight, className }))}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
