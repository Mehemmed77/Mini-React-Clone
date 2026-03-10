export function createTextElement(text: string | number) {
    const validatedText = typeof text === "string" ? text : text.toString();

    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: validatedText,
            children: []
        }
    }
}