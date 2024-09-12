import Button from "@/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormFieldErrorMessage,
  FormFieldWarningMessage,
  FormItem,
  FormLabel,
} from "@/components/form";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { isCompanyEmail } from "company-email-validator";
import React, { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type AuthEmailFormProps = {
  submitButtonLabel?: string;
} & HTMLAttributes<HTMLFormElement>;

const emailRegexp =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const emailSchema = z
  .string()
  .min(1, "This is required — you’ll need to enter an email.")
  .refine(
    (arg) => emailRegexp.test(arg),
    "It looks like that isn’t a valid email address.",
  );

const companyEmailSchema = z
  .string()
  .refine(
    (arg) => isCompanyEmail(arg),
    "Using your work email (if you have one) will make it easier for coworkers to join you on Slack.",
  );

const formSchema = z.object({
  email: emailSchema,
});

const AuthEmailForm = function ({
  submitButtonLabel,
  ...props
}: AuthEmailFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
              <FormFieldWarningMessage />
              <FormFieldErrorMessage />
            </React.Fragment>
          )}
        />

        <Button type="submit" size="lg" fullWidth>
          {submitButtonLabel ? submitButtonLabel : "Continue"}
        </Button>
      </form>
    </Form>
  );
};

export default AuthEmailForm;
