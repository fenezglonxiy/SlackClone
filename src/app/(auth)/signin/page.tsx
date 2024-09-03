import SignInCard from "@/features/auth/components/SignInCard";
import pageTitle from "@/utils/pageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle("Signin"),
};

export default function SignIn() {
  return <SignInCard />;
}
