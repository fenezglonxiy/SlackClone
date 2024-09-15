"use client";

import React from "react";
import Separator from "@/components/Separator";
import OAuth2Button from "./OAuth2Button";
import GoogleIcon from "./GoogleIcon";
import AppleIcon from "./AppleIcon";
import Typography from "@/components/Typography";
import Link from "@/components/Link";
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "./auth-card";
import AuthEmailForm from "./AuthEmailForm";

const SignUpCard = function () {
  return (
    <AuthCard>
      <AuthCardHeader>
        <AuthCardTitle>First, enter your email</AuthCardTitle>
        <AuthCardDescription>
          We suggest using the <strong>email address you use at work.</strong>
        </AuthCardDescription>
      </AuthCardHeader>
      <AuthCardContent>
        <AuthEmailForm authFlow="signUp" />
        <Separator>OR</Separator>
        <div className="space-y-4">
          <OAuth2Button providerIcon={<GoogleIcon />} onClick={() => {}}>
            Continue With Google
          </OAuth2Button>
          <OAuth2Button providerIcon={<AppleIcon />} onClick={() => {}}>
            Continue With Apple
          </OAuth2Button>
        </div>
      </AuthCardContent>
      <AuthCardFooter>
        <Typography variant="body2" as="div">
          Already using Slack?
          <br />
          <Link href="/signin" className="font-normal">
            Sign in to an existing workspace
          </Link>
        </Typography>
      </AuthCardFooter>
    </AuthCard>
  );
};

export default SignUpCard;
