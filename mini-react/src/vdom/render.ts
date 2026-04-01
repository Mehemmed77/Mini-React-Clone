import type { Vnode } from "../types/type";
import diff from "./diff";

let prevVirtualTree: any = null;

export default function render(vnode: Vnode, container: HTMLElement) {
  diff(
    prevVirtualTree,
    vnode,
    container.firstChild as Node | null,
    container
  );

  prevVirtualTree = vnode;
}