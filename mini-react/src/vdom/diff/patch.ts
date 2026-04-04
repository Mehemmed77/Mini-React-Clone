import type { PatchType, Vnode } from "@/types/type";
import diffProps from "./diffProps";
import mountSubtree from "./mountSubtree";
import updateText from "./updateText";

export default function patch(
  oldVDom: Vnode | null,
  newVDom: Vnode | null,
  el: Node | null,
  parent: HTMLElement,
  type: PatchType,
) {
  switch (type) {
    case "REMOVE": {
      (el as HTMLElement)?.remove();
      break;
    }

    case "CREATE": {
      mountSubtree(newVDom as Vnode, parent);
      break;
    }

    case "REPLACE": {
      if (newVDom === null) break;

      const mountedNodes = mountSubtree(newVDom, parent);

      if (el !== null && mountedNodes.length > 0) {
        parent.replaceChild(mountedNodes[0], el);

        for (let i = 1; i < mountedNodes.length; i++) {
          parent.insertBefore(mountedNodes[i], mountedNodes[i - 1].nextSibling);
        }
      }

      break;
    }

    case "UPDATE": {
      if (newVDom === null || oldVDom === null || el === null) break;

      if (newVDom.type === "TEXT_ELEMENT") {
        updateText(oldVDom.props.nodeValue ?? "", newVDom.props.nodeValue ?? "", el);
      }

      else diffProps(oldVDom.props, newVDom.props, el as HTMLElement);
    }
  }
}
