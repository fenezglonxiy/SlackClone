import React from "react";

export type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement>;

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, ...props }, ref) => {
    return <div></div>;
  },
);
FormMessage.displayName = "FormMessage";

export default FormMessage;
