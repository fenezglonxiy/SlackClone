import { CardHeader, CardHeaderProps } from "@/components/card";
import cn from "@/utils/cn";

export type AuthCardHeaderProps = CardHeaderProps;

const AuthCardHeader = function ({
  className,
  children,
  ...props
}: AuthCardHeaderProps) {
  return (
    <CardHeader className="pb-8 pt-0" {...props}>
      <div className={cn("max-w-[700px] space-y-3", className)}>{children}</div>
    </CardHeader>
  );
};

export default AuthCardHeader;
