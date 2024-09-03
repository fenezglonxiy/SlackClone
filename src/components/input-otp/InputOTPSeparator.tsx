import { Dot } from "lucide-react";
import React from "react";

export type InputOTPSeparatorProps = React.ComponentPropsWithoutRef<"div">;

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  InputOTPSeparatorProps
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export default InputOTPSeparator;
