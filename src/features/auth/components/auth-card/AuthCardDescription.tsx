import { CardDescription, CardDescriptionProps } from "@/components/card";

export type AuthCardDescriptionProps = CardDescriptionProps;

const AuthCardDescription = function ({ ...props }: AuthCardDescriptionProps) {
  return <CardDescription {...props} />;
};

export default AuthCardDescription;
