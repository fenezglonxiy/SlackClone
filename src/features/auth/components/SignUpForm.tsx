"use client";

import Button from "@/components/Button";
import {
  Form,
  FormMessage,
  FormControl,
  FormField,
  FormItem,
} from "@/components/form";
import Input from "@/components/Input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "This is required — you’ll need to enter an email.")
    .email("It looks like that isn’t a valid email address."),
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="name@work-email.com" {...field} />
              </FormControl>

              <FormMessage>
                <span className="hidden"></span>
              </FormMessage>
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" fullWidth>
          Continue
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
