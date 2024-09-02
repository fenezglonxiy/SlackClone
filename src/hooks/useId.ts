import { useId as reactUseId } from "react";

export default function useId(idFromProps: string | undefined) {
  if (idFromProps !== undefined) {
    return idFromProps;
  }

  const id = `slack-${reactUseId()}`;
  return id;
}
