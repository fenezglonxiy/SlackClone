import cn from "@/utils/cn";
import React from "react";
import { useFormField } from "./form";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
  markAsValid?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, containerClassName, markAsValid, ...props }, ref) => {
    const { isValid } = useFormField();

    return (
      <div className={cn("relative", containerClassName)}>
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-xl border border-[#5e5d6073] bg-background px-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
            markAsValid && "pr-11",
            className,
          )}
          ref={ref}
          {...props}
        />

        {markAsValid && isValid && (
          <i className="fa-sharp fa-solid fa-circle-check fa-lg absolute right-3 top-1/2 -translate-y-1/2 !leading-none text-[#1264a3]" />
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
