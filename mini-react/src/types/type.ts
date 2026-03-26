export type Props = {
    id?: string,
    className?: string,
    onClick?: () => void
}

export type Vnode = {
    type: keyof JSX.IntrinsicElements | "TEXT_ELEMENT" | "FRAGMENT";
    props: Props & {
        children: Vnode[];
        nodeValue?: string
    }
}