import type { Vnode } from "../types/type";
import CreateDomNode from "./createDomNode";
import diff from "./diff";

let prev_v_tree: any = null;

export default function render(vnode: Vnode, container: HTMLElement) {
    container.innerText = "";
    const domElement = CreateDomNode(vnode, container);

    console.log(prev_v_tree);

    diff(prev_v_tree, vnode);

    prev_v_tree = vnode;

    if (domElement === null) return;

    container.append(domElement);
}