import type { Vnode } from "../types/type";
import CreateDomNode from "./createDomNode";

export default function render(vnode: Vnode, container: HTMLElement) {
    container.innerText = "";
    const domElement = CreateDomNode(vnode, container);

    if (domElement === null) return;

    container.append(domElement);
}