"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values.otp.toUpperCase());
    form.reset({ otp: "" });
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
                  containerClassName="justify-center max-w-[500px] mx-auto gap-0"
                  onComplete={form.handleSubmit(onSubmit)}
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
              <FormMessage>
                <span className="hidden"></span>
              </FormMessage>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ConfirmEmailOTPForm;
