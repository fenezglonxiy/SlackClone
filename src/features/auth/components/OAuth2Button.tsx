"use client";

import Button from "@/components/Button";
import cn from "@/utils/cn";
import React from "react";

export type OAuth2ButtonProps = {
  providerIcon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
} & React.HTMLAttributes<HTMLButtonElement>;

const OAuth2Button = function ({
  providerIcon,
  onClick,
  className,
  children,
  ...props
}: OAuth2ButtonProps) {
  return (
    <Button
      variant="outline"
      size="lg"
      icon={providerIcon}
      iconPosition="start"
      onClick={onClick}
      className={cn(
        "hover:bg-white hover:shadow-[0_1px_4px_#0000004d]",
        className,
      )}
      fullWidth
      {...props}
    >
      {children}
    </Button>
  );
};

export default OAuth2Button;
