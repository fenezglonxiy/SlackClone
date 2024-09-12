import useId from "@/hooks/useId";
import React from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { input, output, ZodEffects, ZodTypeAny } from "zod";

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  id: string;
  name: TName;

  /**
   * Control the zod schema that the form field value will be validated on to
   * emit the warning message corresponding to the first failed validation rule.
   */
  warningSchema?: ZodEffects<ZodTypeAny, output<ZodTypeAny>, input<ZodTypeAny>>;

  /**
   * Control the zod schema that the form field value will be validated on to
   * mark the form field as valid.
   */
  validSchema?: ZodEffects<ZodTypeAny, output<ZodTypeAny>, input<ZodTypeAny>>;
};

export const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

export type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerProps<TFieldValues, TName> & {
  /**
   * Control the zod schema that the form field value will be validated on to
   * emit the warning message corresponding to the first failed validation rule.
   */
  warningSchema?: ZodEffects<ZodTypeAny, output<ZodTypeAny>, input<ZodTypeAny>>;

  /**
   * Control the zod schema that the form field value will be validated on to
   * mark the form field as valid.
   */
  validSchema?: ZodEffects<ZodTypeAny, output<ZodTypeAny>, input<ZodTypeAny>>;
};

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  warningSchema,
  validSchema,
  ...props
}: FormFieldProps<TFieldValues, TName>) => {
  const id = `${useId()}-form-field`;

  return (
    <FormFieldContext.Provider
      value={{ id, name: props.name, warningSchema, validSchema }}
    >
      <div id={id}>
        <Controller {...props} />
      </div>
    </FormFieldContext.Provider>
  );
};

export default FormField;
