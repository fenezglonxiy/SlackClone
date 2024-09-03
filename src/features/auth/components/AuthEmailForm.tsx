import Button from "@/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/form";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type AuthEmailFormProps = {
  submitBtnLabel?: string;
} & HTMLAttributes<HTMLFormElement>;

const formSchema = z.object({
  email: z
    .string()
    .min(1, "This is required — you’ll need to enter an email.")
    .email("It looks like that isn’t a valid email address."),
});

const AuthEmailForm = function ({
  submitBtnLabel,
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
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="name@work-email.com"
                  {...field}
                />
              </FormControl>

              <FormMessage>
                <span className="hidden"></span>
              </FormMessage>
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" fullWidth>
          {submitBtnLabel ? submitBtnLabel : "Continue"}
        </Button>
      </form>
    </Form>
  );
};

export default AuthEmailForm;
