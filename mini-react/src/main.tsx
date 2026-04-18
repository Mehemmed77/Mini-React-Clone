import createElement from "./runtime/createElement";
import Fragment from "./runtime/Fragment";
import render from "./vdom/render";

interface testProps {
  name: string;
}

function Test({ name }: testProps) {
  return (
    <h1>
      { name }
    </h1>
  )
}

const element = (
  <div>
    <Test name="Mehemmed" />
    <h1 key="main">Salam</h1>
    <p key="p">Test</p>
    <h5 key="AA">Yes</h5>
  </div>
);


const element1 = (
  <div>
    <Test name="Maqa"/>
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
