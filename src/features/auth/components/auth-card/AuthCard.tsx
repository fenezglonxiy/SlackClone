import { Card, CardProps } from "@/components/card";
import cn from "@/utils/cn";

export type AuthCardProps = CardProps;

const AuthCard = function ({ className, ...props }: AuthCardProps) {
  return (
    <Card
      className={cn("border-0 text-center shadow-none", className)}
      {...props}
    />
  );
};

export default AuthCard;
