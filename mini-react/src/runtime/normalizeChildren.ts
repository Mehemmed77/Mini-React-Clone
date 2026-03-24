import { createTextElement } from "./createTextElement";
import type { ElementType } from "../types/type";

export function normalizeChildren(children: any[]): ElementType[] {
  const normalizedChildren: ElementType[] = [];

  // could've used .forEach method of arrays, but raw for loop is better for performance
  for (const child of children) {
    const element = normalizeChild(child);

    if (element === null) continue;

    if (Array.isArray(element)) {
      element.forEach((e) => normalizedChildren.push(e));
      continue;
    }

    normalizedChildren.push(element);
  }

  return normalizedChildren;
}

function normalizeChild(child: any): ElementType | ElementType[] | null {
  if (child == null || typeof child === "boolean") return null;

  if (typeof child === "string" || typeof child === "number") {
    return createTextElement(child);
  }

  if (Array.isArray(child)) {
    return flattenArray(child);
  }

  return child;
}

function flattenArray(arr: any[]) {
  const res: ElementType[] = [];

  for (const el of arr) {
    if (Array.isArray(el)) {
      res.push(...flattenArray(el));
    } else {
      const normalized = normalizeChild(el);
      if (normalized !== null) res.push(normalized as ElementType);
    }
  }

  return res;
}
