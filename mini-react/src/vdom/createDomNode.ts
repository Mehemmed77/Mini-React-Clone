import type { Vnode } from "../types/type";
import AppendChildren from "./appendChildren";
import setProps from "./setProps";

export default function CreateDomNode(
  vnode: Vnode,
  lastDomNode: HTMLElement,
): HTMLElement | Text | null {
  switch (vnode.type) {
    case "TEXT_ELEMENT": {
      return document.createTextNode(vnode.props.nodeValue ?? "");
    }

    case "FRAGMENT": {
      AppendChildren(vnode.props.children, lastDomNode);

      return null;
    }

    default: {      
      const elContainer = document.createElement(vnode.type as string);
      AppendChildren(vnode.props.children, elContainer);

      setProps(elContainer, vnode.props);

      return elContainer;
    }
  }
}
