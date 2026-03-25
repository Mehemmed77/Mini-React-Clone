import createElement from "./runtime/createElement";
import printTree from "./vdom/printTree";
import Fragment from "./runtime/Fragment";
import render from "./vdom/render";

function fn() {
  console.log("clicked");
}

const element = (
  <div>
    <h1 id="oppa">Saaa</h1>
    <p>salam</p>
    <u>Let's check</u>
    <button>new button</button>
  </div>
);

// printTree(element, 0);
render(element, document.getElementById("root") as HTMLElement);