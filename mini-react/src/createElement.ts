import { normalizeChildren } from "./normalizeChildren";

export default function createElement(type: any, props: any, ...children: any[]) {
  const normalizedChildren = normalizeChildren(children);

  return {
    type: type,
    props: {
      children: normalizedChildren,
      ...props
    }
  };
}
