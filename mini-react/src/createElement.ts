export default function createElement(type: any, props: any, ...children: any[]) {
  return {
    type: type,
    props: props,
    children: [...children],
  };
}
