import React from "react";
import {
  FormFieldWarningMessage,
  FormFieldWarningMessageProps,
  useFormField,
} from "@/components/form";
import { usingWorkEmailWarningPlaceholderMessage } from "./constants";
import { Button } from "@/components/button";

export type UsingWorkEmailWarningMessageProps = FormFieldWarningMessageProps & {
  /**
   * Callback to run when the `disabled` event is emitted by clicking the `Change` button.
   */
  onDisabled: React.MouseEventHandler<HTMLButtonElement>;
};

const UsingWorkEmailWarningMessage = function ({
  arrow,
  onDisabled,
  ...props
}: UsingWorkEmailWarningMessageProps) {
  const [disabled, setDisabled] = React.useState(false);
  const { warning } = useFormField();

  if (warning?.message !== usingWorkEmailWarningPlaceholderMessage) {
    return null;
  }

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setDisabled(true);
    onDisabled(event);
  };

  return (
    <FormFieldWarningMessage arrow={true} disabled={disabled} {...props}>
      <strong>Using your work email</strong> (if you have one) will make it
      easier for coworkers to join you on Slack.{" "}
      <Button
        variant="link"
        color="link-blue"
        className="font-normal"
        size="auto"
        onClick={handleClick}
      >
        Change
      </Button>
    </FormFieldWarningMessage>
  );
};

export default UsingWorkEmailWarningMessage;
