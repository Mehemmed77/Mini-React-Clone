import type { Vnode } from "@/types/type";
import CreateDomNode from "../createDomNode";

export default function mountSubtree(vTree: Vnode, parentNode: HTMLElement): Node[] {
  if (vTree.type === "FRAGMENT") {
    const mounted: Node[] = [];

    for (const child of vTree.props.children) {
      mounted.push(...mountSubtree(child, parentNode));
    }

    return mounted;
  }

  const domNode = CreateDomNode(vTree);

  if (vTree.type !== "TEXT_ELEMENT") {
    const el = domNode as HTMLElement;
    for (const child of vTree.props.children) mountSubtree(child, el);
  }

  parentNode.append(domNode);

  return [domNode];
}