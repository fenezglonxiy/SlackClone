import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[--color-button-primary] text-primary-foreground hover:bg-[--color-button-primary] hover:opacity-[.902]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#5e5d6073] bg-white text-[#1d1c1d] font-bold bg-clip-padding transition-all duration-[80] ease-linear hover:bg-[#f8f8f8] hover:shadow-[0_1px_3px_#00000014]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 rounded-xl px-4 font-bold text-lg min-w-24",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
          <span className="mr-3">{icon}</span>
        )}
        <Slottable>{children}</Slottable>
        {icon !== undefined && iconPosition === "end" && (
          <span className="ml-3">{icon}</span>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export default Button;
