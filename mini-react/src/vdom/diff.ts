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
    const domElement = create(newVTree, parentNode);

    if (domElement !== null) parentNode.append(domElement);

    return;
  }

  if (oldVTree.type === newVTree.type) {
  } else {
    // replace
  }
}

function create(vTree: Vnode, parentNode: HTMLElement) {
  switch (vTree.type) {
    case "TEXT_ELEMENT": {
      return CreateDomNode(vTree);
    }

    case "FRAGMENT": {
      AppendChildren(vTree.props.children, parentNode);
      return null;
    }

    default: {
      const domElement = CreateDomNode(vTree) as HTMLElement;
      AppendChildren(vTree.props.children, domElement);

      return domElement;
    }
  }
}

function AppendChildren(children: Vnode[], parent: HTMLElement) {
  const domChildren = [];

  for (const child of children) {
    const createdDomNode = create(child, parent);
    if (createdDomNode !== null) domChildren.push(createdDomNode);
  }

  parent.append(...domChildren);
}
