import cn from "@/utils/cn";
import React from "react";
import { useFormContext } from "react-hook-form";
import Typography from "../Typography";

export type FormErrorMessageProps = Omit<
  React.HTMLAttributes<HTMLParagraphElement>,
  "children"
> & {
  /**
   * Control whether the placeholder should be enabled.
   */
  placeholderEnabled?: boolean;

  /**
   * Control the prefix icon.
   */
  icon?: React.ReactNode;

  /**
   * Control the Loader component to render when loading the error.
   */
  loader?: React.ReactNode;

  /**
   * Control whether Loader component should be enabled.
   *
   * If no Loader component was provided, default Loader component would
   * be used.
   */
  loaderEnabled?: boolean;
};

const FormErrorMessage = React.forwardRef<
  HTMLParagraphElement,
  FormErrorMessageProps
>(
  (
    {
      className,
      placeholderEnabled,
      icon,
      loader: loaderFromProps,
      loaderEnabled,
      ...props
    },
    ref,
  ) => {
    const { formState } = useFormContext();
    const { errors, isSubmitting } = formState;
    const serverError = errors.root?.serverError;

    if (!serverError && !placeholderEnabled) {
      return null;
    }

    const isLoaderEnabled = loaderEnabled || (loaderFromProps as boolean);

    const loader = loaderFromProps ?? (
      <div className="space-x-3">
        <i className="fa-light fa-spinner fa-xl animate-spin" />

        <span>Checking your code...</span>
      </div>
    );

    return (
      <Typography
        as="div"
        variant="xs"
        className={cn(
          "rounded-lg px-4 py-3",
          serverError && "bg-[#ff81aa21]",
          className,
        )}
      >
        {!serverError && placeholderEnabled && !isSubmitting && (
          <p className="invisible opacity-0">&nbsp;</p>
        )}

        {!serverError && isLoaderEnabled && isSubmitting && loader}

        {serverError && (
          <p
            ref={ref}
            className={cn(icon && "space-x-3 [&_i]:text-[#c0135b]")}
            {...props}
          >
            {icon}

            <span>{serverError.message}</span>
          </p>
        )}
      </Typography>
    );
  },
);
FormErrorMessage.displayName = "FormErrorMessage";

export default FormErrorMessage;
