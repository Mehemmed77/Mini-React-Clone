import { normalizeChildren } from "./normalizeChildren";
import type { ElementType } from "./types/type";

export default function createElement(type: JSX.IntrinsicElements, props: any, ...children: any[]): ElementType {
  const normalizedChildren = normalizeChildren(children);

  // return {
  //   type: type,
  //   props: {
  //     children: normalizedChildren,
  //     ...props
  //   }
  // };

  return {
    type: type,
    props: {
      children: normalizedChildren,
      ...props
    }
  }
}
