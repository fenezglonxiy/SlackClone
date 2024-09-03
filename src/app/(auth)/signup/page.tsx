import SignUpCard from "@/features/auth/components/SignUpCard";
import pageTitle from "@/utils/pageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle("Singup"),
};

export default function SignUp() {
  return <SignUpCard />;
}
