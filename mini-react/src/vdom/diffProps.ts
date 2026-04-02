import type { Props } from "../types/type";

export default function diffProps(oldProps: Props, newProps: Props, domElement: HTMLElement) {
  for (const key in oldProps) {
    if (key === "children") continue;

    const oldVal = oldProps[key];
    const newVal = newProps[key];

    if (newVal == null) removeExistingProp(key, oldVal, domElement);
    else if (newVal !== oldVal) {
      removeExistingProp(key, oldVal, domElement);
      addNewProp(key, newVal, domElement);
    }
  }

  for (const key in newProps) {
    if (key === "children") continue;

    const oldVal = oldProps[key];
    const newVal = newProps[key];

    console.log(key, newVal);

    if (oldVal == null) addNewProp(key, newVal, domElement);
  }
}

function addNewProp(key: string, val: any, domElement: HTMLElement) {
  if (key.startsWith("on")) domElement.addEventListener(key.slice(2).toLowerCase(), val);
  else if (typeof val === "boolean") (domElement as any)[key] = val;
  else domElement.setAttribute(key, val);
}

function removeExistingProp(key: string, val: any, domElement: HTMLElement) {
  if (key.startsWith("on")) domElement.removeEventListener(key.slice(2).toLowerCase(), val);
  else if (typeof val === "boolean") (domElement as any)[key] = false;
  else domElement.removeAttribute(key);
}
