"use client";

import Link from "@/components/Link";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import React from "react";
import SignUpFloatNav from "./SignUpFloatNav";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isSignInPage = pathname === "/signin";

  return (
    <React.Fragment>
      <header className="relative h-[122px]">
        <div className="flex h-full items-center justify-center">
          <Link href="/">
            <Logo width={undefined} height="26" />
          </Link>
        </div>

        {isSignInPage && <SignUpFloatNav />}
      </header>

      <main className="mt-[-8px]">
        <div className="flex justify-center">{children}</div>
      </main>
    </React.Fragment>
  );
}
