import type { Vnode } from "../types/type";
import CreateDomNode from "./createDomNode";

export default function diff(
  oldVTree: Vnode | null,
  newVTree: Vnode | null,
  domTree: HTMLElement | null,
  parentNode: HTMLElement,
) {
  if (newVTree === null) {
    domTree?.remove();
    return;
  }

  if (oldVTree === null) {
    const newDomSubTree = CreateDomNode(newVTree);

    // Fragment already appended its children inside CreateDomNode.
    
    // Thus, diff does need to do extra work.

    if (newDomSubTree !== null) {
      parentNode.append(newDomSubTree);
    }

    return;
  }

  if (oldVTree.type === newVTree.type) {
  }
  
  else {
    // replace
  }
}
