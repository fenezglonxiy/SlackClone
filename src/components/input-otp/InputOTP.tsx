import cn from "@/utils/cn";
import { OTPInput } from "input-otp";
import React from "react";

export type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput>;

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  InputOTPProps
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName,
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

export default InputOTP;
