import Typography from "@/components/Typography";
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "./auth-card";
import ConfirmEmailOTPForm from "./ConfirmEmailOTPForm";
import OpenGmailLink from "./OpenGmailLink";
import OpenOutlookLink from "./OpenOutlookLink";

const ConfirmEmailOTPCard = function () {
  return (
    <AuthCard>
      <AuthCardHeader>
        <AuthCardTitle>Check your email for a code</AuthCardTitle>
        <AuthCardDescription>
          We’ve sent a 6-character code to <strong>bob@gmail.com</strong>. The
          code expires shortly, so please enter it soon.
        </AuthCardDescription>
      </AuthCardHeader>
      <AuthCardContent className="max-w-[500px] pb-3">
        <ConfirmEmailOTPForm />
      </AuthCardContent>
      <AuthCardFooter>
        <Typography as="div" variant="sm" className="text-[#616061]">
          <div className="mb-5 flex justify-center space-x-12">
            <OpenGmailLink />
            <OpenOutlookLink />
          </div>
          Can’t find your code? Check your spam folder!
        </Typography>
      </AuthCardFooter>
    </AuthCard>
  );
};

export default ConfirmEmailOTPCard;
