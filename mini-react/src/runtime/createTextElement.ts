import type { ElementType } from "../types/type";

export function createTextElement(text: string | number): ElementType {
  const validatedText = typeof text === "string" ? text : text.toString();

  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: validatedText,
      children: [],
    },
  };
}
