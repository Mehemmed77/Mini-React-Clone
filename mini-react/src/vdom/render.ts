import type { Vnode } from "../types/type";
import diff from "./diff";

let prevVirtualTree: any = null;
let prevDomTree: any = null;

export default function render(vnode: Vnode, container: HTMLElement) {
    container.innerText = "";

    const domElement = diff(prevVirtualTree, vnode, prevDomTree, container);

    prevDomTree = domElement;
    prevVirtualTree = vnode;

    if (domElement === null) return;

    // container.append(domElement as Node);
}