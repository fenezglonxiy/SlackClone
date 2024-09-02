import { CardFooter, CardFooterProps } from "@/components/card";
import cn from "@/utils/cn";

export type AuthCardFooterProps = CardFooterProps;

const AuthCardFooter = function ({ className, ...props }: AuthCardFooterProps) {
  return <CardFooter className={cn("block", className)} {...props} />;
};

export default AuthCardFooter;
