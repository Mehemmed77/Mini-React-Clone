import type { Vnode } from "@/types/type";
import CreateDomNode from "../createDomNode";

export default function mountSubtree(
  vDom: Vnode,
  parent: HTMLElement,
  append: boolean,
): Node[] {
  if (typeof vDom.type === "function") vDom = vDom.type(vDom.props) as Vnode;

  if (vDom.type === "FRAGMENT") {
    const mounted: Node[] = [];

    for (const child of vDom.props.children) {
      mounted.push(...mountSubtree(child, parent, false));
    }

    return mounted;
  }

  const domNode = CreateDomNode(vDom);

  if (vDom.type !== "TEXT_ELEMENT") {
    const el = domNode as HTMLElement;
    for (const child of vDom.props.children) {
      mountSubtree(child, el, true);
    }
  }

  if (append) {
    parent.append(domNode);
  }

  return [domNode];
}
