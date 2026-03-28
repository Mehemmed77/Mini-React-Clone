import createElement from "./runtime/createElement";
import Fragment from "./runtime/Fragment";
import render from "./vdom/render";

const element = (
  <div>
    <div>
      <h1></h1>
      <p></p>
    </div>
    <div>
      <p></p>
      <p></p>
    </div>
  </div>
);

const element1 = (
  <div>
    <div>
      <h4></h4>
      <h4></h4>
    </div>
    <div>
      <p></p>
      <p></p>
    </div>
  </div>
);

// printTree(element, 0);
render(element, document.getElementById("root") as HTMLElement);
render(element1, document.getElementById("root") as HTMLElement);
