import type { KeyedChild, Vnode } from "@/types/type";

export default function GetKeys(vNodes: Vnode[], parent: HTMLElement) {
    const keyMap: Map<string, KeyedChild> = new Map();
    
    vNodes.forEach((vNode, index) => {
        const key = vNode.props.key ?? index;
        keyMap.set(key, { vnode: vNode, index: index, dom: parent.childNodes[index]});
    });

    return keyMap;
}