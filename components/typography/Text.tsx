export enum TextType {
    LinkBold = "LINK_BOLD",
    LargeHeader = "LARGE_HEADER",
};

export interface TextProps {
    textType?: TextType;
    className?: string;
    text: string;
}

export default function Text(props: TextProps) {

    switch (props.textType) {
        case TextType.LinkBold: {
            return (
                <p className={`font-bold tracking-wide text-lg ${props.className ?? ""}`}>
                    {props.text}
                </p>
            )
        }
        case TextType.LargeHeader: {
            return (
                <p className={`font-bold tracking-tighter text-6xl ${props.className ?? ""}`}>
                    {props.text}
                </p>
            )
        }
    }

    return (
        <p className={props.className ?? ""}>
            {props.text}
        </p>
    )
}
