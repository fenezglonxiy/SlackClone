"use client";

import Separator from "@/components/Separator";
import AppleIcon from "./AppleIcon";
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "./auth-card";
import GoogleIcon from "./GoogleIcon";
import OAuth2Button from "./OAuth2Button";
import Typography from "@/components/Typography";
import Link from "@/components/Link";
import SignInEmailForm from "./SignInEmailForm";

const SignInCard = function () {
  return (
    <AuthCard>
      <AuthCardHeader>
        <AuthCardTitle>Sign in to Slack</AuthCardTitle>
        <AuthCardDescription>
          We suggest using the <strong>email address you use at work.</strong>
        </AuthCardDescription>
      </AuthCardHeader>
      <AuthCardContent>
        <div className="space-y-4">
          <OAuth2Button providerIcon={<GoogleIcon />} onClick={() => {}}>
            Sign In With Google
          </OAuth2Button>
          <OAuth2Button providerIcon={<AppleIcon />} onClick={() => {}}>
            Sign In With Apple
          </OAuth2Button>
        </div>
        <Separator>OR</Separator>
        <SignInEmailForm />
      </AuthCardContent>
      <AuthCardFooter className="rounded-lg bg-[#1d1c1d0d] px-5 py-3">
        <div className="flex text-left text-[#616061]">
          <span>
            <i className="fa-sharp fa-light fa-sparkles rotate-180" />
          </span>
          <Typography variant="body2" as="span" className="pl-3.5">
            We’ll email you a magic code for a password-free sign in. Or you can{" "}
            <Link href="/workspace-signin" className="text-[length:inherit]">
              sign in manually instead
            </Link>
            .
          </Typography>
        </div>
      </AuthCardFooter>
    </AuthCard>
  );
};

export default SignInCard;
