import React from "react";
import useFormField from "./useFormField";
import Typography from "../Typography";
import WarningIcon from "./WarningIcon";

export type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement>;

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

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

        <p ref={ref} id={formMessageId}>
          {body}
        </p>
      </Typography>
    );
  },
);
FormMessage.displayName = "FormMessage";

export default FormMessage;
