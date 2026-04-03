export default function updateProp(
  key: string,
  val: any,
  domElement: HTMLElement,
  action: "ADD" | "DELETE",
) {
  const { type, name } = normalizeProp(key, val);

  switch (type) {
    case "event": {
      if (action === "ADD") domElement.addEventListener(name, val);
      else domElement.removeEventListener(name, val);

      break;
    }

    case "boolean": {
      console.log(name);
      (domElement as any)[name] = action === "ADD" ? !!val : false;

      if (action === "ADD" && val) {
        domElement.setAttribute(name, "");
      } else {
        domElement.removeAttribute(name);
      }

      break;
    }

    case "attribute": {
      if (action === "ADD") domElement.setAttribute(name, val);
      else domElement.removeAttribute(name);

      break;
    }
  }
}


function normalizeProp(key: string, val: any) {
  if (key === "className") key = "class";

  if (key.startsWith("on")) {
    return {
      type: "event",
      name: key.slice(2).toLowerCase(),
    };
  }

  if (typeof val === "boolean") {
    return {
      type: "boolean",
      name: key,
    };
  }

  return {
    type: "attribute",
    name: key,
  };
}
