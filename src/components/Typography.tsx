"use client";

import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-5xl",
      h2: "text-4xl",
      h3: "text-3xl",
      h4: "text-2xl",
      h5: "text-xl",
      body1: "text-lg",
      body2: "text-base",
      small: "text-sm leading-none",
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
    variant: "body1",
    fontWeight: "normal",
  },
});

const typographyMappings = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body1: "p",
  body2: "p",
  small: "p",
} as const;

type TypographyMappingValues =
  (typeof typographyMappings)[keyof typeof typographyMappings];

export type TypographyProps = VariantProps<typeof typographyVariants> &
  React.HTMLAttributes<HTMLElement> & {
    as?: "span" | "div" | TypographyMappingValues;
  };

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (
    {
      variant = "body1",
      fontWeight = "normal",
      className,
      as: asFromProps,
      ...props
    },
    ref,
  ) => {
    const CompFromVariant =
      typographyMappings[
        variant as NonNullable<keyof typeof typographyMappings>
      ];

    const Comp = asFromProps !== undefined ? asFromProps : CompFromVariant;

    return (
      <Comp
        ref={ref}
        className={cn(typographyVariants({ variant, fontWeight, className }))}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";

export default Typography;
