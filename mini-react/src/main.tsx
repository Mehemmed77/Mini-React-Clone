import createElement from "./runtime/createElement";
import Fragment from "./runtime/Fragment";
import render from "./vdom/render";

function f() {
  console.log("1");
}

function f1() {
  console.log("2");
}

const element = (
  <div>
    <h1 id="id1" className="test">
      SALAM
    </h1>
    <h2 className="c1">KIKIKKI</h2>
    <button onClick={f} disabled>AAAA</button>
  </div>
);

const element1 = (
  <div>
    <h1 id="id2">SALAAM</h1>
    <h2 className="c1">AAAAAAAAA</h2>
    <button onClick={f1} disabled={false}>AAAA</button>
  </div>
);

// printTree(element, 0);
render(element, document.getElementById("root") as HTMLElement);
render(element1, document.getElementById("root") as HTMLElement);
