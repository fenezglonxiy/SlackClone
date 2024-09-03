import React from "react";
import Label from "../Label";
import * as LabelPrimitive from "@radix-ui/react-label";
import useFormField from "./useFormField";
import cn from "@/utils/cn";

export type FormLabelProps = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
>;

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  FormLabelProps
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

export default FormLabel;
