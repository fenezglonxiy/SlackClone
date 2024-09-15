import React from "react";
import { default as NextLink } from "next/link";
import { Button, ButtonProps } from "./button";

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink> & {
  color?: Extract<ButtonProps["color"], "link-blue" | "link-grey">;
  icon?: ButtonProps["icon"];
  iconPosition?: ButtonProps["iconPosition"];
  iconContainerClassName?: ButtonProps["iconContainerClassName"];
};

const Link = React.forwardRef<React.ElementRef<typeof NextLink>, LinkProps>(
  (
    {
      color = "link-blue",
      className,
      icon,
      iconPosition,
      iconContainerClassName,
      ...props
    },
    ref,
  ) => (
    <Button
      variant="link"
      size="auto"
      color={color}
      className={className}
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
