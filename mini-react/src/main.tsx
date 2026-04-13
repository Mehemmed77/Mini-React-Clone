import createElement from "./runtime/createElement";
import Fragment from "./runtime/Fragment";
import render from "./vdom/render";

const element = (
  <div>
    <h1 key="main">Salam</h1>
    <p key="p">Test</p>
    <h5 key="AA">Yes</h5>
  </div>
);

const element1 = (
  <div>
    <>
      <h2 key="b">New 1</h2>
      <h3 key="c">New 2</h3>
    </>
    <h1 key="main">Salam</h1>
    <p key="p">Test updated</p>
  </div>
);

render(element, document.getElementById("root") as HTMLElement);
render(element1, document.getElementById("root") as HTMLElement);
