import React from "react";
import useFormField from "./useFormField";
import Typography from "../Typography";
import WarningIcon from "./WarningIcon";
import cn from "@/utils/cn";

export type FormFieldErrorMessageProps =
  React.HTMLAttributes<HTMLParagraphElement>;

const FormFieldErrorMessage = React.forwardRef<
  HTMLParagraphElement,
  FormFieldErrorMessageProps
>(({ children, className, ...props }, ref) => {
  const { error, formErrorMessageId } = useFormField();
  const body = error ? String(error.message) : children;

  if (!body) {
    return null;
  }

  return (
    <Typography
      variant="sm"
      fontWeight="medium"
      className={cn(error && "flex items-center text-destructive", className)}
      as="div"
      {...props}
    >
      {error && <WarningIcon className="pr-1" />}

      <p ref={ref} id={formErrorMessageId}>
        {body}
      </p>
    </Typography>
  );
});

FormFieldErrorMessage.displayName = "FormFieldErrorMessage";
export default FormFieldErrorMessage;
