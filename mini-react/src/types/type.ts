export type Props = {
    id?: string,
    className?: string,
    onClick?: () => void
}

export type ElementType = {
    type: keyof JSX.IntrinsicElements;
    props: Props & {
        children: ElementType;
    }
}