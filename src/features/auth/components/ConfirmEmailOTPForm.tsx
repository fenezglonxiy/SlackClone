"use client";

import {
  Form,
  FormControl,
  FormErrorMessage,
  FormField,
  FormItem,
} from "@/components/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  otp: z.string().length(6),
});

const ConfirmEmailOTPForm = function () {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const { isDirty } = form.getFieldState("otp");

  React.useEffect(() => {
    if (isDirty) {
      form.clearErrors("root.serverError");
    }
  }, [form, isDirty]);

  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    form.setError("root.serverError", {
      message: "That code wasn't valid. Give it another go!",
    });

    setTimeout(() => form.resetField("otp"), 500);
  };

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormControl>
                <InputOTP
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  containerClassName="justify-center gap-0"
                  onComplete={form.handleSubmit(handleFormSubmit)}
                  {...field}
                >
                  {[
                    [0, 1, 2],
                    [3, 4, 5],
                  ].map((group, index, groups) => (
                    <React.Fragment key={`confirm-email-otp-group-${index}`}>
                      <InputOTPGroup className="h-[94px] w-1/2">
                        {group.map((slot) => (
                          <InputOTPSlot
                            key={`confirm-email-otp-slot-${slot}`}
                            index={slot}
                            size="lg"
                            caretHeight="lg"
                            className="h-full w-1/3"
                          />
                        ))}
                      </InputOTPGroup>
                      {index < groups.length - 1 && (
                        <InputOTPSeparator className="m-2" />
                      )}
                    </React.Fragment>
                  ))}
                </InputOTP>
              </FormControl>
              <FormErrorMessage
                className="!mt-5"
                icon={
                  <i className="fa-regular fa-triangle-exclamation fa-xl" />
                }
                placeholderEnabled
                loaderEnabled
              />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ConfirmEmailOTPForm;
