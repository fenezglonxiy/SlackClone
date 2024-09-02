"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import React from "react";
import SignUpForm from "./SignUpForm";
import Separator from "@/components/Separator";
import OAuth2Button from "./OAuth2Button";
import GoogleIcon from "./GoogleIcon";
import AppleIcon from "./AppleIcon";
import Typography from "@/components/Typography";
import Link from "@/components/Link";

const SignUpCard = () => {
  return (
    <Card className="max-w-[800px] border-0 text-center shadow-none">
      <CardHeader className="pb-7 pt-0">
        <CardTitle variant="h1" fontWeight="bold" className="mb-2">
          First, enter your email
        </CardTitle>
        <CardDescription>
          We suggest using the <strong>email address you use at work.</strong>
        </CardDescription>
      </CardHeader>
      <CardContent className="mx-auto max-w-[400px] space-y-4 px-0">
        <SignUpForm />
        <Separator>OR</Separator>
        <div className="space-y-4">
          <OAuth2Button
            providerName="Google"
            providerIcon={<GoogleIcon />}
            onClick={() => {}}
          />
          <OAuth2Button
            providerName="Apple"
            providerIcon={<AppleIcon />}
            onClick={() => {}}
          />
        </div>
      </CardContent>
      <CardFooter className="block">
        <Typography variant="body2">Already using Slack?</Typography>
        <Link href="/signin">Sign in to an existing workspace</Link>
      </CardFooter>
    </Card>
  );
};

export default SignUpCard;
