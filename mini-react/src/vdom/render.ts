import type { Vnode } from "../types/type";
import CreateDomNode from "./createDomNode";

export default function render(vnode: Vnode, container: HTMLElement) {
    container.innerText = "";
    const domElement = CreateDomNode(vnode);

    if (domElement instanceof HTMLElement) {
        container.insertAdjacentElement("beforeend", domElement);
    }

    else {
        container.innerText = domElement.textContent;
    }
}