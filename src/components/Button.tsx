"use client";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import cn from "@/utils/cn";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        base: "",
        contained:
          "bg-[--color-button-primary] text-primary-foreground hover:bg-[--color-button-primary] hover:opacity-[.902]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#5e5d6073] bg-white text-[#1d1c1d] bg-clip-padding transition-all duration-[80ms] ease-linear hover:bg-[#f8f8f8] hover:shadow-[0_1px_3px_#00000014]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        base: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 rounded-xl px-4 font-semibold text-lg min-w-24",
        icon: "h-10 w-10",
        auto: "",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "contained",
      size: "base",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Control the icon's position.
   */
  iconPosition?: "start" | "end";

  /**
   * Control the icon to render.
   */
  icon?: React.ReactNode;

  /**
   * Control the `className` prop of the icon container.
   */
  iconContainerClassName?: string;

  /**
   * Reference: https://www.radix-ui.com/primitives/docs/guides/composition
   */
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      iconPosition,
      icon,
      asChild = false,
      children,
      iconContainerClassName,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      >
        {icon !== undefined && iconPosition === "start" && (
          <span className={iconContainerClassName}>{icon}</span>
        )}
        <Slottable>{children}</Slottable>
        {icon !== undefined && iconPosition === "end" && (
          <span className={iconContainerClassName}>{icon}</span>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export default Button;
