import React from "react";
import useFormField from "./useFormField";
import Typography from "../Typography";
import WarningIcon from "./WarningIcon";

export type FormFieldErrorMessageProps =
  React.HTMLAttributes<HTMLParagraphElement>;

const FormFieldErrorMessage = React.forwardRef<
  HTMLParagraphElement,
  FormFieldErrorMessageProps
>(({ children, ...props }, ref) => {
  const { error, formErrorMessageId } = useFormField();
  const body = error ? String(error.message) : children;

  if (!body) {
    return null;
  }

  return (
    <Typography
      variant="sm"
      fontWeight="medium"
      className={error && "flex items-center text-destructive"}
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
