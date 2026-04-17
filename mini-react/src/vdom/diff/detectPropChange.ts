import type { Props, Vnode } from "@/types/type";

export default function detectPropChange(oldVDom: Vnode, newVDom: Vnode) {
  const oldProps: Props = oldVDom.props;
  const newProps: Props = newVDom.props;

  for (const key in oldProps) {
    if (key === "children") continue;

    if(!Object.hasOwn(newProps, key)) return true;

    if(oldProps[key] !== newProps[key]) return true;
  }

  for (const key in newProps) {
    if (key === "children") continue;

    if(!Object.hasOwn(oldProps, key)) return true;
  }

  return false;
}
