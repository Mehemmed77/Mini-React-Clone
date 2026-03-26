import type { Vnode } from "../types/type";
import CreateDomNode from "./createDomNode";

export default function AppendChildren(children: Vnode[], parent: HTMLElement) {
    const domChildren = [];

    for(const child of children) {
        const createdDomNode = CreateDomNode(child, parent);
        if (createdDomNode !== null) domChildren.push(createdDomNode);
    }

    parent.append(...domChildren);
}