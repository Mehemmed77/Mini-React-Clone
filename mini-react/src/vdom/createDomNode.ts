import type { Vnode } from "../types/type";
import updateProp from "./diff/updateProp";

export default function CreateDomNode(vnode: Vnode): Node {
  if (vnode.type === "TEXT_ELEMENT") {
    return document.createTextNode(vnode.props.nodeValue ?? "");
  }

  const el = document.createElement(vnode.type as string);

  const props = vnode.props;
  for (const key in props) key === "children" || updateProp(key, props[key], el, "ADD");

  return el;
}
