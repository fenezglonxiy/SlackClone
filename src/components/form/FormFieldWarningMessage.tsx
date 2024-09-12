import React from "react";
import Typography from "../Typography";
import useFormField from "./useFormField";

export type FormFieldWarningMessageProps =
  React.HTMLAttributes<HTMLParagraphElement> & {
    /**
     * Control whether the paper containing the message should have arrow.
     */
    arrow?: boolean;
  };

const FormFieldWarningMessage = React.forwardRef<
  HTMLParagraphElement,
  FormFieldWarningMessageProps
>(({ children, arrow, ...props }, ref) => {
  const { warning, isValid, formWarningMessageId } = useFormField();
  const body = isValid && warning ? warning.message : children;

  if (!body) {
    return null;
  }

  return (
    <Typography as="div">
      <p ref={ref} id={formWarningMessageId} {...props}>
        {body}
      </p>
    </Typography>
  );
});

FormFieldWarningMessage.displayName = "FormFieldWarningMessage";
export default FormFieldWarningMessage;
