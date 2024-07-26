import Text, { TextType } from "../typography/Text";

export interface NavigationProps {
    links: NavigationLinkProps[];
};

export default function Navigation(props: NavigationProps) {
    return (
        <div className="flex justify-between items-center px-20 py-5">
            <div className="border border-black p-3">
                {"<logo>"}
            </div>

            <div className="flex space-x-12 items-center">
                {props.links.map((link: NavigationLinkProps) => <NavigationLink key={link.label} {...link} />)}
                <div className="border border-black p-3">
                    {"<language-selector>"}
                </div>
            </div>
        </div>
    );
}

export interface NavigationLinkProps {
    label: string;
    href: string;
}

export function NavigationLink(props: NavigationLinkProps) {
    return (
        <a href={props.href}>
            <Text textType={TextType.LinkBold} text={props.label}/>
        </a>
    )
}
