import React from "react";
import Typography, { TypographyProps } from "../Typography";

export type CardDescriptionProps = TypographyProps;

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>((props, ref) => <Typography ref={ref} variant="body1" as="p" {...props} />);
CardDescription.displayName = "CardDescription";

export default CardDescription;
