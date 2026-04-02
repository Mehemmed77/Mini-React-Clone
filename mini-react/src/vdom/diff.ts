import type { Vnode } from "../types/type";
import CreateDomNode from "./createDomNode";
import diffProps from "./diffProps";

export default function diff(
  oldVTree: Vnode | null,
  newVTree: Vnode | null,
  domTree: Node | null,
  parentNode: HTMLElement,
) {
  if (newVTree === null) {
    (domTree as HTMLElement)?.remove();
    return;
  }

  if (oldVTree === null) {
    console.log(newVTree.type, parentNode);
    mountSubtree(newVTree, parentNode);
    return;
  }

  if (oldVTree.type !== newVTree.type) {
    const mountedNodes = mountSubtree(newVTree, parentNode);

    if (domTree !== null && mountedNodes.length > 0) {
      parentNode.replaceChild(mountedNodes[0], domTree);

      for (let i = 1; i < mountedNodes.length; i++) {
        parentNode.insertBefore(mountedNodes[i], mountedNodes[i - 1].nextSibling);
      }
    }

    return;
  }

  if (newVTree.type === "TEXT_ELEMENT") {
    handleTextElements(oldVTree.props.nodeValue ?? "", newVTree.props.nodeValue ?? "", domTree);
    return;
  }


  if (domTree) diffProps(oldVTree.props, newVTree.props, domTree as HTMLElement);

  const elementDom = newVTree.type === "FRAGMENT" ? parentNode : (domTree as HTMLElement);
  const oldChildren = oldVTree.props.children;
  const newChildren = newVTree.props.children;

  let index = 0;
  while (index < oldChildren.length || index < newChildren.length) {
    diff(
      oldChildren.at(index) ?? null,
      newChildren.at(index) ?? null,
      elementDom.childNodes[index] ?? null,
      elementDom,
    );
    index++;
  }
}

function handleTextElements(prev: string, curr: string, el: Node | null) {
  if (prev !== curr && el) {
    el.textContent = curr;
  }
}

function mountSubtree(vTree: Vnode, parentNode: HTMLElement): Node[] {
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
