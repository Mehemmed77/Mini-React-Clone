import type { Vnode } from "@/types/type";
import CreateDomNode from "../createDomNode";

export default function mountSubtree(
  vTree: Vnode,
  parentNode: HTMLElement,
  append: boolean,
): Node[] {
  if (typeof vTree.type === "function") vTree = vTree.type(vTree.props) as Vnode;

  if (vTree.type === "FRAGMENT") {
    const mounted: Node[] = [];

    for (const child of vTree.props.children) {
      mounted.push(...mountSubtree(child, parentNode, false));
    }

    return mounted;
  }

  const domNode = CreateDomNode(vTree);

  if (vTree.type !== "TEXT_ELEMENT") {
    const el = domNode as HTMLElement;
    for (const child of vTree.props.children) {
      mountSubtree(child, el, true);
    }
  }

  if (append) {
    parentNode.append(domNode);
  }

  return [domNode];
}
