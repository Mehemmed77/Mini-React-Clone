import type { Props } from "@/types/type";
import updateProp from "../updateProp";

export default function diffProps(oldProps: Props, newProps: Props, domElement: HTMLElement) {
  for (const key in oldProps) {
    if (key === "children") continue;

    const oldVal = oldProps[key];
    const newVal = newProps[key];

    if (newVal == null) updateProp(key, oldVal, domElement, "DELETE");
    else if (newVal !== oldVal) {
      updateProp(key, oldVal, domElement, "DELETE");
      updateProp(key, newVal, domElement, "ADD");
    }
  }

  for (const key in newProps) {
    if (key === "children") continue;

    const oldVal = oldProps[key];
    const newVal = newProps[key];

    if (oldVal == null) updateProp(key, newVal, domElement, "ADD");
  }
}