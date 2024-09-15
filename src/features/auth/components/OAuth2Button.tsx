"use client";

import { Button } from "@/components/button";
import cn from "@/utils/cn";
import React from "react";

export type OAuth2ButtonProps = {
  providerIcon: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLButtonElement>, "color">;

const OAuth2Button = function ({
  providerIcon,
  className,
  children,
  ...props
}: OAuth2ButtonProps) {
  return (
    <Button
      variant="outlined"
      color="outlined-black"
      size="lg"
      icon={providerIcon}
      iconPosition="start"
      className={cn(
        "hover:bg-white hover:shadow-[0_1px_4px_#0000004d]",
        className,
      )}
      iconContainerClassName="mr-3"
      fullWidth
      {...props}
    >
      {children}
    </Button>
  );
};

export default OAuth2Button;
