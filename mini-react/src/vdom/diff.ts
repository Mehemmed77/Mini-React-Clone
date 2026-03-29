import type { Vnode } from "../types/type";
import CreateDomNode from "./createDomNode";

export default function diff(
  oldVTree: Vnode | null,
  newVTree: Vnode | null,
  domNode: HTMLElement | null,
  container: HTMLElement,
) {
  if (container === null) return;

  if (newVTree === null) {
    domNode?.remove();
    return;
  }

  if (oldVTree === null) {
    // CREATE
    const domElement = CreateDomNode(newVTree, container);

    if (domElement !== null){
        container.append(domElement);
    };

    return domNode;
  }

  if (oldVTree.type === newVTree.type) {
    // UPDATE PROPS AND

    let index = 0;
    while (oldVTree.props.children.length > index || newVTree.props.children.length > index) {
        console.log(domNode);
      diff(
        oldVTree.props.children.at(index) ?? null,
        newVTree.props.children.at(index) ?? null,
        (domNode?.children[index] ?? null) as HTMLElement,
        domNode as HTMLElement,
      );

      index++;
    }
  } else {
    // CREATE
    CreateDomNode(newVTree, container);
  }

  return domNode;
}
