import createElement from "./createElement"
import printTree from "./vdom/printTree";

function fn() {
  console.log("clicked");
}

const element = (
  <div>
    <p></p>
    <u></u>
    <button onClick={fn}></button>
  </div>
)

printTree(element, 0);
console.log(element);