import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { OTPInputContext } from "input-otp";
import React from "react";

const inputOTPSlotVariants = cva(
  "font-sans relative flex items-center justify-center border-y border-r border-[#1d1c1d80] transition first:rounded-l-md first:border-l last:rounded-r-md",
  {
    variants: {
      size: {
        base: "h-10 w-10 text-sm",
        lg: "h-24 w-20 text-[length:50px] leading-[56px]",
      },
    },
    defaultVariants: {
      size: "base",
    },
  },
);

const inputOTPSlotCaretVariants = cva(
  "w-[0.8px] animate-caret-blink bg-foreground duration-1000",
  {
    variants: {
      caretHeight: {
        base: "h-4",
        lg: "h-14",
      },
    },
    defaultVariants: {
      caretHeight: "base",
    },
  },
);

export type InputOTPSlotProps = VariantProps<typeof inputOTPSlotVariants> &
  VariantProps<typeof inputOTPSlotCaretVariants> &
  React.ComponentPropsWithoutRef<"div"> & {
    index: number;
  };

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  InputOTPSlotProps
>(({ index, className, size, caretHeight, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        inputOTPSlotVariants({ size }),
        isActive &&
          "z-10 border border-[#1264A3] shadow-[0px_0px_0px_1px_#1264A3,0px_0px_7px_#1264a34d]",
        className,
      )}
      {...props}
    >
      {char?.toUpperCase()}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className={cn(inputOTPSlotCaretVariants({ caretHeight }))} />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

export default InputOTPSlot;
