import React from "react";
import { FormProvider } from "react-hook-form";

export type FormProps = React.ComponentPropsWithoutRef<typeof FormProvider>;

const Form = FormProvider;

export default Form;
