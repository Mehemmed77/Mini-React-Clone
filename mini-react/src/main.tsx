import createElement from "./runtime/createElement";
import Fragment from "./runtime/Fragment";
import render from "./vdom/render";

const element = (
  <div>
    <h1>SALAM</h1>
    <h2>KIKIKKI</h2>
  </div>
);

const element1 = (
  <div>
    <h1>SALAAM</h1>
    <h2>AAAAAAAAA</h2>
    <>
      <ul>
        <li>as</li>
        <li>ass</li>
        <li>asss</li>
        <li>asss</li>
        <li>assss</li>
      </ul>
    </>
  </div>
);

// printTree(element, 0);
render(element, document.getElementById("root") as HTMLElement);
render(element1, document.getElementById("root") as HTMLElement);
