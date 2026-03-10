# Day 1

What is `createElement()` function in React?
- 

It allows you to create React elements, serving as an alternative to using _JSX_

It accepts 3 arguments:

- _type_: Type of the element. It could be an HTML tag name (such as `div`, `p`) or React component (custom function, class or special component like `Fragment`)
- _props_: Arguments (such as `className`, `id`) you want to pass to element. It must be either an object or null
- _children_ (optional): Zero or more child nodes. They can be any valid React nodes, including React elements, strings, numbers, portals, empty nodes and array of React nodes.

It returns:

- _type_: The type you have passed.
- _props_: The props you have passed except for ref and key.
- _ref_: The ref you have passed. If missing, null.
- _key_: The key you have passed, coerced to a string. If missing, null.

A React element is more like a description for the React to later render the components. 