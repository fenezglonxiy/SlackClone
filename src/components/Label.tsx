import { Label as PrimitiveLabel } from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import cn from "@/utils/cn";
import React from "react";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  React.ElementRef<typeof PrimitiveLabel>,
  React.ComponentPropsWithoutRef<typeof PrimitiveLabel> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <PrimitiveLabel
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = PrimitiveLabel.displayName;

export default Label;
