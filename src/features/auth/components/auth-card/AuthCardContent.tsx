import { CardContent, CardContentProps } from "@/components/card";
import cn from "@/utils/cn";

export type AuthCardContentProps = CardContentProps;

const AuthCardContent = function ({
  className,
  ...props
}: AuthCardContentProps) {
  return (
    <CardContent
      className={cn("mx-auto max-w-[400px] space-y-6 px-0", className)}
      {...props}
    />
  );
};

export default AuthCardContent;
