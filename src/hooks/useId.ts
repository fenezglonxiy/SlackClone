import { useId as reactUseId } from "react";

export default function useId(idFromProps?: string) {
  if (idFromProps !== undefined) {
    return idFromProps;
  }

  const id = `slack-${reactUseId()}`;
  return id;
}
