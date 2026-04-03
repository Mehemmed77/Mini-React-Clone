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
  <div id="root" className="container">
    <h1 id="title">Hello</h1>

    <ul>
      <li className="item">A</li>
      <li className="item">B</li>
      <li className="item">C</li>
    </ul>

    <button onClick={f} disabled>
      Click me
    </button>

    <p>Paragraph</p>

    <div id="root-new" className="container-new">
      {/* same node type, props change */}

      <h1 id="title">Hello World</h1>
      {/* same node → text change */}

      <ul>
        <li className="item">A</li>
        <li className="item-new">B updated</li>
        <li className="item">D</li>
      </ul>
      {/* same structure, internal changes */}

      <button onClick={f1} disabled={false}>
        Click me
      </button>
      {/* event + boolean change */}

      <section>New Node</section>
      {/* p → section (NODE TYPE CHANGE!) */}
    </div>
  </div>
);

const element1 = (
  <div id="root-new" className="container-new">
    {/* same node type, props change */}

    <h1 id="title">Hello World</h1>
    {/* same node → text change */}

    <ul>
      <li className="item">A</li>
      <li className="item-new">B updated</li>
      <li className="item">D</li>
    </ul>
    {/* same structure, internal changes */}

    <button onClick={f1} disabled={false}>
      Click me
    </button>
    {/* event + boolean change */}

    <section>New Node</section>
    {/* p → section (NODE TYPE CHANGE!) */}

    <div id="root-new" className="container-new">
      {/* same node type, props change */}

      <h1 id="title">Hello World</h1>
      {/* same node → text change */}

      <ul>
        <li className="item">A</li>
        <li className="item-new">B updated</li>
        <li className="item">D</li>
      </ul>
      {/* same structure, internal changes */}

      <button onClick={f} disabled={false}>
        Click me
      </button>
      {/* event + boolean change */}

      <section>New Node</section>
      {/* p → section (NODE TYPE CHANGE!) */}
    </div>
  </div>
);

render(element, document.getElementById("root") as HTMLElement);
render(element1, document.getElementById("root") as HTMLElement);
