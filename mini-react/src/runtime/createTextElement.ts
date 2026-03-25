import type { Vnode } from "../types/type";

export function createTextElement(text: string | number): Vnode {
  const validatedText = typeof text === "string" ? text : text.toString();

  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: validatedText,
      children: [],
    },
  };
}
