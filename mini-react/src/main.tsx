import createElement from "./runtime/createElement";
import Fragment from "./runtime/Fragment";
import render from "./vdom/render";

const element = (
  <p>kdsk</p>
);

// printTree(element, 0);
render(element, document.getElementById("root") as HTMLElement);