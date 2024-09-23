import { z } from "zod";
import { emailAddressRegexp } from "./constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormFieldErrorMessage,
  FormItem,
  FormLabel,
} from "@/components/form";
import React from "react";
import Input from "@/components/Input";
import { Button } from "@/components/button";
import _ from "lodash";

const emailAddressSchema = z
  .string()
  .min(1, "Please fill in your email.")
  .refine(
    (arg) => emailAddressRegexp.test(arg),
    "Sorry, but that email is invalid.",
  );

const signInEmailFormSchema = z.object({
  email: emailAddressSchema,
});

const SignInEmailForm = function () {
  const form = useForm<z.infer<typeof signInEmailFormSchema>>({
    resolver: zodResolver(signInEmailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof signInEmailFormSchema>) => {
    form.setError("root.serverError", {
      message:
        "Are you sure that address is typed correctly? If there are no mistakes, carry on!",
    });
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="space-y-2"
      >
        <div>
          <FormField
            control={form.control}
            name="email"
            validSchema={emailAddressSchema}
            className="space-y-2"
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

                <FormFieldErrorMessage className="text-left">
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
          Sign In With Email
        </Button>
      </form>
    </Form>
  );
};

export default SignInEmailForm;
