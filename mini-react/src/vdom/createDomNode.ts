import type { Vnode } from "../types/type";
import setProps from "./setProps";

export default function CreateDomNode(vnode: Vnode): HTMLElement | Text {
  const elContainer: HTMLElement | Text =
    vnode.type !== "TEXT_ELEMENT"
      ? document.createElement(vnode.type as string)
      : document.createTextNode(vnode.props.nodeValue ?? "");

  const children = [];

  for (const child of vnode.props.children) {
    children.push(CreateDomNode(child));
  }

  for (const child of children) {
    elContainer.appendChild(child);
  }

  if (elContainer instanceof HTMLElement) setProps(elContainer, vnode.props);

  return elContainer;
}
