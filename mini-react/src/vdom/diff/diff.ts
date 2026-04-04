import type { Vnode } from "@/types/type";
import patch from "./patch";

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
