export type Props = {
    children: Vnode[]
} & {
    [key: string]: any
}

export type Vnode = {
    type: keyof JSX.IntrinsicElements | "TEXT_ELEMENT" | "FRAGMENT";
    props: Props
}

export type PatchType = "CREATE" | "REMOVE" | "UPDATE" | "REPLACE";