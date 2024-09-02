import { CardTitle, CardTitleProps } from "@/components/card";
import cn from "@/utils/cn";

export type AuthCardTitleProps = CardTitleProps;

const AuthCardTitle = function ({ className, ...props }: AuthCardTitleProps) {
  return (
    <CardTitle
      variant="h1"
      fontWeight="bold"
      className={cn("mb-2", className)}
      {...props}
    />
  );
};

export default AuthCardTitle;
