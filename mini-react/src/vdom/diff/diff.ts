import type { KeyedChild, Vnode } from "@/types/type";
import patch from "./patch";

export default function diff(
  oldVDom: Vnode | null,
  newVDom: Vnode | null,
  el: Node | null,
  parent: HTMLElement,
) {
  patch(oldVDom, newVDom, el, parent);

  if (!(oldVDom !== null && newVDom !== null && oldVDom.type === newVDom.type)) return;

  // do key-based diffing

  const newParent = newVDom.type === "FRAGMENT" ? parent : (el as HTMLElement);

  const oldChildren = oldVDom.props.children;
  const newChildren = newVDom.props.children;

  const oldKeyMap: Map<string, KeyedChild> = new Map();

  oldChildren.forEach((v, i) => {
    const key = v.props.key ?? i;
    oldKeyMap.set(key, { vnode: v, index: i, dom: newParent.childNodes[i] });
  });

  const domNodes: (Node | null)[] = [];

  newChildren.forEach((v, i) => {
    const key = v.props.key ?? i;

    const match = oldKeyMap.get(key);

    if (match) {
      const { vnode, index } = match;

      const oldChildDom = newParent.childNodes[index] ?? null;

      const nodes = patch(vnode, v, oldChildDom, newParent);

      domNodes.push(...nodes as Node[]);

      oldKeyMap.delete(key);
    }

    else {
      const nodes = patch(null, v, null, newParent);
    
      domNodes.push(...nodes as Node[]);
    }
  });

  oldKeyMap.forEach((v) => newParent.removeChild(newParent.childNodes[v.index]));

  domNodes.forEach((node, i) => {
    const current = newParent.childNodes[i];

    if (current !== node) {
      newParent.insertBefore(node as Node, current);
    }
  });
}
