export interface IconCardType {
    icon: string;
    title: string;
    result: string;
    className?: string;
    iconClassName?: string;
    titleClassName?: string;
    resultClassName?: string;
    style?: React.CSSProperties | undefined
}

export interface SimpleCardType {
    title: string;
    result: string;
    className?: string;
    titleClassName?: string;
    resultClassName?: string;
    style?: React.CSSProperties | undefined
}