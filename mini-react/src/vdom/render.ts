import type { Vnode } from "../types/type";
import diff from "./diff";

let prev_v_tree: any = null;
let prev_dom_tree: any = null;

export default function render(vnode: Vnode, container: HTMLElement) {
    container.innerText = "";

    const domElement = diff(prev_v_tree, vnode, prev_dom_tree, container);

    console.log(domElement);
    prev_dom_tree = domElement;
    prev_v_tree = vnode;

    if (domElement === null) return;

    container.append(domElement as Node);
}