"use client";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import cn from "@/utils/cn";
import React from "react";
import "./button.css";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        base: "",
        contained:
          "bg-[--button-contained-bg-color] text-[--button-contained-color] hover:bg-[--button-contained-bg-color] hover:opacity-[--button-contained-hover-opacity]",
        outlined:
          "border border-[--button-outlined-border-color] bg-[--button-outlined-bg-color] text-[--button-outlined-color] bg-clip-padding transition-all duration-[80ms] ease-linear hover:bg-[--button-outlined-hover-bg-color] hover:shadow-[0_1px_3px_#00000014]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-2 hover:underline font-semibold text-[length:inherit] text-[--button-link-color]",
      },
      size: {
        base: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 rounded-xl px-4 font-semibold text-lg min-w-24",
        icon: "h-10 w-10",
        auto: "",
      },
      color: {
        "contained-purple": "button-contained-purple",
        "outlined-black": "button-outline-black",
        "link-blue": "button-link-blue",
        "link-grey": "button-link-grey",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "contained",
      color: "contained-purple",
      size: "base",
      fullWidth: false,
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
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

    /**
     * Control the Loader component to render when loading.
     */
    loader?: React.ReactNode;

    /**
     * Control whether Loader component should be enabled.
     *
     * If no Loader component was provided, default Loader component would
     * be used.
     */
    loaderEnabled?: boolean;

    /**
     * Control whether the button should be disabled when loading.
     */
    isLoading?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      color,
      size,
      fullWidth,
      iconPosition,
      icon,
      asChild: asChildFromProps = false,
      children,
      iconContainerClassName,
      disabled,
      loader: loaderFromProps,
      loaderEnabled,
      isLoading,
      ...props
    },
    ref,
  ) => {
    const isLoaderEnabled = loaderEnabled || loaderFromProps;
    const asChild = isLoaderEnabled ? false : asChildFromProps;
    const Comp = asChild ? Slot : "button";
    const loader = loaderFromProps ?? (
      <i className="fa-sharp-duotone fa-solid fa-spinner-third animate-spin" />
    );

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, color, fullWidth, className }),
        )}
        ref={ref}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && loader}

        {!isLoading && icon && iconPosition === "start" && (
          <span className={iconContainerClassName}>{icon}</span>
        )}

        {!isLoading && (asChild ? <Slottable>{children}</Slottable> : children)}

        {!isLoading && icon && iconPosition === "end" && (
          <span className={iconContainerClassName}>{icon}</span>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export default Button;
