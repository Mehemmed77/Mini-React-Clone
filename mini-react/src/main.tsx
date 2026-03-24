import createElement from "./runtime/createElement";
import printTree from "./vdom/printTree";
import Fragment from "./runtime/Fragment";

function fn() {
  console.log("clicked");
}

const element = (
  <>
    <p></p>
    <u></u>
    <button onClick={fn}></button>
  </>
);

printTree(element, 0);
console.log(element);
