import { Slot } from "@radix-ui/react-slot";
import React from "react";
import useFormField from "./useFormField";

export type FormControlProps = React.ComponentPropsWithoutRef<typeof Slot>;

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  FormControlProps
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={formDescriptionId}
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

export default FormControl;
