import { CardHeader, CardHeaderProps } from "@/components/card";
import cn from "@/utils/cn";

export type AuthCardHeaderProps = CardHeaderProps;

const AuthCardHeader = function ({ className, ...props }: AuthCardHeaderProps) {
  return <CardHeader className={cn("pb-7 pt-0", className)} {...props} />;
};

export default AuthCardHeader;
