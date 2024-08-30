import React from "react";
import Typography, { TypographyProps } from "../Typography";

const CardDescription = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (props, ref) => <Typography ref={ref} variant="body" as="p" {...props} />
);
CardDescription.displayName = "CardDescription";

export default CardDescription;
