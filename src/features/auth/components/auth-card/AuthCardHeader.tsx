import { CardHeader, CardHeaderProps } from "@/components/card";
import cn from "@/utils/cn";

export type AuthCardHeaderProps = CardHeaderProps;

const AuthCardHeader = function ({ className, ...props }: AuthCardHeaderProps) {
  return (
    <CardHeader className={cn("space-y-3 pb-8 pt-0", className)} {...props} />
  );
};

export default AuthCardHeader;
