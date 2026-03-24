export type Props = {
    id?: string,
    className?: string,
    onClick?: () => void
}

export type ElementType = {
    type: keyof JSX.IntrinsicElements | "TEXT_ELEMENT";
    props: Props & {
        children: ElementType[];
        nodeValue?: string
    }
}