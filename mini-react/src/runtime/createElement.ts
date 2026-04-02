import { normalizeChildren } from "./normalizeChildren";
import type { Vnode, Props } from "../types/type";

export default function createElement(
  type: keyof JSX.IntrinsicElements,
  props: Props,
  ...children: any[]
): Vnode {
  const normalizedChildren = normalizeChildren(children);

  const el = {
    type: type,
    props: {
      ...props,
      children: normalizedChildren,
    },
  };

  return el;
}
