import Link from "@/components/Link";
import Logo from "@/components/Logo";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <React.Fragment>
      <header className="h-[122px]">
        <div className="flex h-full items-center justify-center">
          <Link href="/">
            <Logo width="auto" height="26" />
          </Link>
        </div>
      </header>

      {children}
    </React.Fragment>
  );
}
