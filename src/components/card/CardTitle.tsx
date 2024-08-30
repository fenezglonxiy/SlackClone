import React from "react";
import Typography, { TypographyProps } from "../Typography";

const CardTitle = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (props, ref) => (
    <Typography
      ref={ref}
      variant="h3"
      fontWeight="semibold"
      as="h3"
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

export default CardTitle;
