import type { Vnode } from "../types/type";

export default function diff(oldVTree: Vnode | null, newVTree: Vnode | null ) {
    // algorithm skeleton
    if (oldVTree === null) {
        // CREATE
        return;
    }

    if (newVTree === null) {
        // DESTROY
        return;
    }

    if (oldVTree.type === newVTree.type) {
        // UPDATE PROPS AND

        let index = 0;
        while (oldVTree.props.children.length > index || newVTree.props.children.length > index) {
            
            diff(oldVTree.props.children.at(index) ?? null, newVTree.props.children.at(index) ?? null);

            index++;
        }

    }
    
    else {
        // CREATE
    }
}