import React from "react";
import { default as NextLink } from "next/link";
import Button from "./Button";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/utils/cn";

const linkVariants = cva("", {
  variants: {
    size: {
      base: "text-sm",
      sm: "text-[13px] leading-none",
      inherit: "text-[length:inherit]",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

export type LinkProps = VariantProps<typeof linkVariants> &
  React.ComponentPropsWithoutRef<typeof NextLink>;

const Link = React.forwardRef<React.ElementRef<typeof NextLink>, LinkProps>(
  ({ size, className, ...props }, ref) => (
    <Button
      variant="link"
      size="auto"
      className={cn(linkVariants({ size }), className)}
      asChild
    >
      <NextLink ref={ref} {...props} />
    </Button>
  ),
);

Link.displayName = "Link";
export default Link;
