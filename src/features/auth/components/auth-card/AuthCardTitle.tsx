import { CardTitle, CardTitleProps } from "@/components/card";

export type AuthCardTitleProps = CardTitleProps;

const AuthCardTitle = function ({ ...props }: AuthCardTitleProps) {
  return <CardTitle variant="h1" fontWeight="bold" {...props} />;
};

export default AuthCardTitle;
