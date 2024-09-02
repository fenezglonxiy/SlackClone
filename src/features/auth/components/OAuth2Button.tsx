"use client";

import Button from "@/components/Button";
import cn from "@/utils/cn";
import React from "react";

export type OAuth2ButtonProps = {
  providerName: string;
  providerIcon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
} & React.HTMLAttributes<HTMLButtonElement>;

const OAuth2Button: React.FC<OAuth2ButtonProps> = ({
  providerName,
  providerIcon,
  onClick,
  className,
  ...props
}) => {
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
      Continue with {providerName}
    </Button>
  );
};

export default OAuth2Button;
