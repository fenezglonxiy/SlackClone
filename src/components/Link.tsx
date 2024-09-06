import React from "react";
import { default as NextLink } from "next/link";
import Button, { ButtonProps } from "./Button";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/utils/cn";

const linkVariants = cva(
  "underline-offset-2 hover:underline font-semibold text-[length:inherit]",
  {
    variants: {
      color: {
        blue: "text-[#1264a3]",
        grey: "text-[#616061]",
      },
    },
    defaultVariants: {
      color: "blue",
    },
  },
);

export type LinkProps = VariantProps<typeof linkVariants> &
  React.ComponentPropsWithoutRef<typeof NextLink> & {
    icon?: ButtonProps["icon"];
    iconPosition?: ButtonProps["iconPosition"];
    iconContainerClassName?: ButtonProps["iconContainerClassName"];
  };

const Link = React.forwardRef<React.ElementRef<typeof NextLink>, LinkProps>(
  (
    { color, className, icon, iconPosition, iconContainerClassName, ...props },
    ref,
  ) => (
    <Button
      variant="base"
      size="auto"
      className={cn(linkVariants({ color }), className)}
      icon={icon}
      iconPosition={iconPosition}
      iconContainerClassName={iconContainerClassName}
      asChild
    >
      <NextLink ref={ref} {...props} />
    </Button>
  ),
);

Link.displayName = "Link";
export default Link;
