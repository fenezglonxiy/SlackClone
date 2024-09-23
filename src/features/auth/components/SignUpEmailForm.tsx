import { z } from "zod";
import {
  emailAddressRegexp,
  usingWorkEmailAddressWarningPlaceholderMessage,
} from "./constants";
import { isCompanyEmail } from "company-email-validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormErrorMessage,
  FormField,
  FormFieldErrorMessage,
  FormItem,
  FormLabel,
} from "@/components/form";
import React from "react";
import Input from "@/components/Input";
import { Button } from "@/components/button";
import UsingWorkEmailAddressWarningMessage from "./UsingWorkEmailAddressWarningMessage";
import _ from "lodash";

const emailAddressSchema = z
  .string()
  .min(1, "This is required — you’ll need to enter an email.")
  .refine(
    (arg) => emailAddressRegexp.test(arg),
    "It looks like that isn’t a valid email address.",
  );

const companyEmailAddressSchema = z
  .string()
  .refine(
    (arg) => isCompanyEmail(arg),
    usingWorkEmailAddressWarningPlaceholderMessage,
  );

const signUpFormSchema = z.object({
  email: emailAddressSchema,
});

const SignUpEmailForm = function () {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleInputEmailFocus = () => {
    form.clearErrors("root.serverError");
  };

  const handleFormSubmit = (values: z.infer<typeof signUpFormSchema>) => {
    form.setError("root.serverError", {
      type: "custom",
      message:
        "Are you sure that address is typed correctly? If there are no mistakes, carry on!",
    });
  };

  const handleWarningMessageDisabled = () => {
    setTimeout(() => {
      form.setFocus("email");
    }, 100);
  };

  return (
    <Form {...form}>
      <FormErrorMessage className="mb-4 text-left" />

      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="!mt-0 space-y-3"
      >
        <div>
          <FormField
            control={form.control}
            name="email"
            validSchema={emailAddressSchema}
            warningSchema={companyEmailAddressSchema}
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
                      onFocus={handleInputEmailFocus}
                      {...field}
                    />
                  </FormControl>
                </FormItem>

                <UsingWorkEmailAddressWarningMessage
                  onDisabled={handleWarningMessageDisabled}
                  className="mt-4"
                />

                <FormFieldErrorMessage className="mt-2 text-left">
                  <span className="invisible hidden opacity-0"></span>
                </FormFieldErrorMessage>
              </React.Fragment>
            )}
          />
        </div>

        <Button
          variant="contained"
          color="contained-purple"
          size="lg"
          type="submit"
          disabled={!_.isEmpty(form.formState.errors)}
          fullWidth
        >
          Continue
        </Button>
      </form>
    </Form>
  );
};

export default SignUpEmailForm;
