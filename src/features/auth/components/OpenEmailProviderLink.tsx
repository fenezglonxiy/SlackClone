import Link from "@/components/Link";
import React from "react";

export type OpenEmailProviderLinkProps = Omit<
  React.HTMLAttributes<HTMLAnchorElement>,
  "color"
> & {
  providerHref: string;
  providerIcon?: React.ReactNode;
};

const OpenEmailProviderLink = function ({
  providerHref,
  providerIcon,
  ...props
}: OpenEmailProviderLinkProps) {
  return (
    <Link
      href={providerHref}
      target="_blank"
      color="grey"
      className="font-normal"
      icon={providerIcon}
      iconPosition="start"
      iconContainerClassName="mr-2"
      {...props}
    />
  );
};

export default OpenEmailProviderLink;
