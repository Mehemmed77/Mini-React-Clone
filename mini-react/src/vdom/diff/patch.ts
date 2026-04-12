import type { PatchType, Vnode } from "@/types/type";
import diffProps from "./diffProps";
import mountSubtree from "./mountSubtree";
import updateText from "./updateText";

export default function patch(
  oldVDom: Vnode | null,
  newVDom: Vnode | null,
  el: Node | null,
  parent: HTMLElement,
) {
  const type: PatchType = resolvePatchType(oldVDom, newVDom);

  switch (type) {
    case "REMOVE": {
      (el as HTMLElement)?.remove();
      return [];
    }

    case "CREATE": {
      const nodes = mountSubtree(newVDom as Vnode, parent, false) as Node[];
      parent.append(...nodes);

      return nodes;
    }

    case "REPLACE": {
      if (newVDom === null) break;

      const mountedNodes = mountSubtree(newVDom, parent, false);

      if (el !== null && mountedNodes.length > 0) {
        parent.replaceChild(mountedNodes[0], el);

        for (let i = 1; i < mountedNodes.length; i++) {
          parent.insertBefore(mountedNodes[i], mountedNodes[i - 1].nextSibling);
        }
      }

      return mountedNodes;
    }

    case "UPDATE": {
      if (newVDom === null || oldVDom === null || el === null) break;

      if (newVDom.type === "TEXT_ELEMENT") {
        updateText(oldVDom.props.nodeValue ?? "", newVDom.props.nodeValue ?? "", el);
      } else diffProps(oldVDom.props, newVDom.props, el as HTMLElement);

      return [el];
    }
  }
}

function resolvePatchType(oldVDom: Vnode | null, newVDom: Vnode | null): PatchType {
  if (newVDom === null) return "REMOVE";
  if (oldVDom === null) return "CREATE";
  if (oldVDom.type !== newVDom.type) return "REPLACE";
  return "UPDATE";
}
