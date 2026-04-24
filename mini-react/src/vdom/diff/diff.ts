import type { Vnode } from "@/types/type";
import patch from "./patch";
import GetKeys from "./getKeys";

export default function diff(
  oldVDom: Vnode | null,
  newVDom: Vnode | null,
  el: Node | null,
  parent: HTMLElement,
) {
  const nodes = patch(oldVDom, newVDom, el, parent);

  // If the types are different return the mounted nodes;
  if (!(oldVDom !== null && newVDom !== null && oldVDom.type === newVDom.type)) return nodes;

  // do key-based diffing

  // Define new parent element since key-based diffing is done with the element's children
  const newParent = newVDom.type === "FRAGMENT" ? parent : (el as HTMLElement);

  const oldVChildren = oldVDom.props.children;
  const newVChildren = newVDom.props.children;

  const oldKeys = GetKeys(oldVChildren, newParent);

  const patchedNodes: (Node | null)[] = [];

  newVChildren.forEach((newVNode, i) => {
    const key = newVNode.props.key ?? i;

    const match = oldKeys.get(key);

    let nodes: Node[] | undefined;

    if (match) {
      const { vnode: oldVNode, index } = match;

      const currentChildNode = newParent.childNodes[index] ?? null;

      nodes = diff(oldVNode, newVNode, currentChildNode, newParent);
      
      oldKeys.delete(key);
    }
    
    else nodes = patch(null, newVNode, null, newParent);

    patchedNodes.push(...nodes as Node[]); 
  })

  oldKeys.forEach(v => {
    if(v.dom) (v.dom as HTMLElement).remove();
  });

  patchedNodes.forEach((node, i) => {
    const current = newParent.childNodes[i];

    if (current !== node) {
      newParent.insertBefore(node as Node, current);
    }
  });

  return nodes;
}
