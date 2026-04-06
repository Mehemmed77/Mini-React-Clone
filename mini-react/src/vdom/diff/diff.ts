import type { Vnode } from "@/types/type";
import patch from "./patch";

type Sample = {
  child: Vnode;
  key: string;
};

export default function diff(
  oldVDom: Vnode | null,
  newVDom: Vnode | null,
  el: Node | null,
  parent: HTMLElement,
) {
  if (newVDom === null) {
    patch(oldVDom, newVDom, el, parent, "REMOVE");
    return;
  }

  if (oldVDom === null) {
    patch(oldVDom, newVDom, el, parent, "CREATE");
    return;
  }

  if (oldVDom.type !== newVDom.type) {
    patch(oldVDom, newVDom, el, parent, "REPLACE");
    return;
  }

  patch(oldVDom, newVDom, el, parent, "UPDATE");

  const elementDom = newVDom.type === "FRAGMENT" ? parent : (el as HTMLElement);

  const oldChildren = oldVDom.props.children;
  const newChildren = newVDom.props.children;

  const oldKeyMap: Map<string, Sample> = new Map();

  oldChildren.forEach((v, i) => {
    const key = v.props.key ?? i;
    oldKeyMap.set(key, { child: v, key: i.toString() });
  });

  const newDomNodes: (ChildNode | null)[] = [];

  newChildren.forEach((v, i) => {
    const key = v.props.key ?? i;

    const match = oldKeyMap.get(key);

    if (match) {
      const { child: oldChild } = match;

      const oldChildDom = elementDom.childNodes[i] ?? null;

      diff(oldChild, v, oldChildDom, parent);
      
      newDomNodes.push(oldChildDom);

      oldKeyMap.delete(key);
    }

    else {
      
    }
  });

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
