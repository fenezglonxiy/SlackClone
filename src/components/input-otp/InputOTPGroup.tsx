import cn from "@/utils/cn";
import React from "react";

export type InputOTPGroupProps = React.ComponentPropsWithoutRef<"div">;

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  InputOTPGroupProps
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

export default InputOTPGroup;
