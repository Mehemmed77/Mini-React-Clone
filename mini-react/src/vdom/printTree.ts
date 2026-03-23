export default function printTree(node: any, indent = 0) {
    if (node.type === "TEXT_ELEMENT") console.log(`${" ".repeat(indent)}TEXT: ${node.props.nodeValue}`);
    else console.log(`${" ".repeat(indent)}${node.type}`)
    
    for(const child of node.props.children) {
        printTree(child, indent + 2);
    }
}