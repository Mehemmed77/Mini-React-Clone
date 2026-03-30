import type { Vnode } from "../types/type";
import setProps from "./setProps";

export default function CreateDomNode(
  vnode: Vnode,
): Node {
  if (vnode.type === "TEXT_ELEMENT") {
    return document.createTextNode(vnode.props.nodeValue ?? "");
  }

  const el = document.createElement(vnode.type as string);
  setProps(el, vnode.props);

  return el;
}
