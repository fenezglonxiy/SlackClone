import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { FormFieldContext } from "./FormField";
import { FormItemContext } from "./FormItem";

const useFormField = () => {
  const itemContext = React.useContext(FormItemContext);
  const { id: formItemId } = itemContext;
  const fieldContext = React.useContext(FormFieldContext);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const id = fieldContext.id;
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  const { field } = useController({ name: fieldContext.name });
  const isValid = fieldContext.validSchema?.safeParse(field.value).success;
  const warning = fieldContext.warningSchema?.safeParse(field.value).error
    ?.errors[0];

  return {
    id,
    name: fieldContext.name,
    formItemId: `${formItemId}-form-item`,
    formDescriptionId: `${formItemId}-form-item-description`,
    formErrorMessageId: `${id}-form-item-error-message`,
    formWarningMessageId: `${id}-form-item-warning-message`,
    warning,
    isValid,
    ...fieldState,
  };
};

export default useFormField;
