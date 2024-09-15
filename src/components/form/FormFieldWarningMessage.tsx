import React from "react";
import Typography from "../Typography";
import useFormField from "./useFormField";
import cn from "@/utils/cn";

export type FormFieldWarningMessageProps =
  React.HTMLAttributes<HTMLParagraphElement> & {
    /**
     * Control whether the paper containing the message should have arrow.
     */
    arrow?: boolean;

    /**
     * Control whether the message should be disabled.
     */
    disabled?: boolean;
  };

const FormFieldWarningMessage = React.forwardRef<
  HTMLParagraphElement,
  FormFieldWarningMessageProps
>(({ children, arrow, className, disabled, ...props }, ref) => {
  const { warning, isValid, formWarningMessageId } = useFormField();

  if (!isValid || disabled) {
    return null;
  }

  const body = children ?? warning?.message;

  if (!body) {
    return null;
  }

  return (
    <Typography
      as="div"
      variant="body2"
      className={cn(
        "relative rounded bg-[linear-gradient(#f2c74459,#f2c74459)] pb-2 pl-3 pr-8 pt-2.5 text-left",
        arrow &&
          "before:absolute before:-top-[19px] before:left-6 before:h-0 before:w-0 before:border-[10px] before:border-transparent before:border-b-[#f2c74459] before:content-['']",
        className,
      )}
    >
      <p ref={ref} id={formWarningMessageId} {...props}>
        {body}
      </p>
    </Typography>
  );
});

FormFieldWarningMessage.displayName = "FormFieldWarningMessage";
export default FormFieldWarningMessage;
