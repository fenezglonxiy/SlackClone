import ConfirmEmailOTPCard from "@/features/auth/components/ConfirmEmailOTPCard";
import pageTitle from "@/utils/pageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle("Login"),
};

export default function ConfirmEmail() {
  return <ConfirmEmailOTPCard />;
}
