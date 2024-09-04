import { CardFooter, CardFooterProps } from "@/components/card";
import cn from "@/utils/cn";

export type AuthCardFooterProps = CardFooterProps;

const AuthCardFooter = function ({
  className,
  children,
  ...props
}: AuthCardFooterProps) {
  return (
    <CardFooter className="block" {...props}>
      <div className={cn("mx-auto max-w-[400px]", className)}>{children}</div>
    </CardFooter>
  );
};

export default AuthCardFooter;
