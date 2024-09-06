import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const inputOTPSeparatorVariants = cva("text-[#1d1c1d]", {
  variants: {
    variant: {
      dot: "fa-solid fa-circle-small fa-2xs",
      hyphen: "fa-sharp fa-light fa-hyphen",
    },
  },
  defaultVariants: {
    variant: "hyphen",
  },
});

export type InputOTPSeparatorProps = VariantProps<
  typeof inputOTPSeparatorVariants
> &
  React.ComponentPropsWithoutRef<"div">;

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  InputOTPSeparatorProps
>(({ variant = "hyphen", ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <i className={inputOTPSeparatorVariants({ variant })} />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export default InputOTPSeparator;
