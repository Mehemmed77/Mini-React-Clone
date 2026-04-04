import createElement from "./runtime/createElement";
import Fragment from "./runtime/Fragment";
import render from "./vdom/render";

const element = (
  <div>
    <h1>Salam</h1>
  </div>
);

const element1 = (
  <div>
    <>
      <h1>Salam evvel</h1>
      <h2>Salam evvel 2</h2>
    </>
    <h1>Salam</h1>
  </div>
);

render(element, document.getElementById("root") as HTMLElement);
render(element1, document.getElementById("root") as HTMLElement);
