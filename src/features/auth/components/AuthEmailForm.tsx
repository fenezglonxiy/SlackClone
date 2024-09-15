import {
  Form,
  FormControl,
  FormField,
  FormFieldErrorMessage,
  FormItem,
  FormLabel,
} from "@/components/form";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { isCompanyEmail } from "company-email-validator";
import React, { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AuthenticationFlow } from "../types";
import {
  emailInvalidErrorMessage,
  emailNonemptyErrorMessage,
  emailRegexp,
  usingWorkEmailWarningPlaceholderMessage,
} from "./constants";
import UsingWorkEmailWarningMessage from "./UsingWorkEmailWarningMessage";
import { Button } from "@/components/button";

const emailSchema = z
  .string()
  .min(1, emailNonemptyErrorMessage)
  .refine((arg) => emailRegexp.test(arg), emailInvalidErrorMessage);

const companyEmailSchema = z
  .string()
  .refine(
    (arg) => isCompanyEmail(arg),
    usingWorkEmailWarningPlaceholderMessage,
  );

const formSchema = z.object({
  email: emailSchema,
});

export type AuthEmailFormProps = {
  authFlow: AuthenticationFlow;
} & HTMLAttributes<HTMLFormElement>;

const AuthEmailForm = function ({ authFlow, ...props }: AuthEmailFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const onWarningMessageDisabled = () => {
    setTimeout(() => {
      form.setFocus("email");
    }, 100);
  };

  return (
    <Form {...form} {...props}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5">
        <FormField
          control={form.control}
          name="email"
          validSchema={emailSchema}
          warningSchema={companyEmailSchema}
          render={({ field }) => (
            <React.Fragment>
              <FormItem>
                <FormLabel className="invisible hidden opacity-0">
                  Email
                </FormLabel>

                <FormControl>
                  <Input
                    containerClassName="!mt-0"
                    placeholder="name@work-email.com"
                    markAsValid
                    {...field}
                  />
                </FormControl>
              </FormItem>
              <UsingWorkEmailWarningMessage
                className="mb-2 mt-5"
                arrow={true}
                onDisabled={onWarningMessageDisabled}
              />
              <FormFieldErrorMessage className="mt-2">
                <span className="invisible hidden opacity-0"></span>
              </FormFieldErrorMessage>
            </React.Fragment>
          )}
        />

        <Button
          variant="contained"
          color="contained-purple"
          type="submit"
          size="lg"
          fullWidth
        >
          {authFlow === "signUp" ? "Continue" : "Sign In With Email"}
        </Button>
      </form>
    </Form>
  );
};

export default AuthEmailForm;
