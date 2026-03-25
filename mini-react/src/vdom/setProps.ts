import type { Props } from "../types/type";

export default function setProps(el: HTMLElement, props: Props) {
    console.log(props);
    if(props.className) el.setAttribute("className", props.className);
    if(props.id) el.setAttribute("id", props.id);
}