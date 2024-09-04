import { CardContent, CardContentProps } from "@/components/card";
import cn from "@/utils/cn";

export type AuthCardContentProps = CardContentProps;

const AuthCardContent = function ({
  className,
  children,
  ...props
}: AuthCardContentProps) {
  return (
    <CardContent className="px-0" {...props}>
      <div className={cn("mx-auto max-w-[400px] space-y-6", className)}>
        {children}
      </div>
    </CardContent>
  );
};

export default AuthCardContent;
