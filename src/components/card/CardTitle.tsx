import React from "react";
import Typography, { TypographyProps } from "../Typography";

export type CardTitleProps = TypographyProps;

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  (props, ref) => (
    <Typography
      ref={ref}
      variant="h3"
      fontWeight="semibold"
      as="h3"
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

export default CardTitle;
