import { TitleStyled, SubTitle } from "./TitleStyle";

interface TitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

export default function Title(props: TitleProps) {
    return (
        <>
            <TitleStyled>
                {props.title}
            </TitleStyled>
            <SubTitle>
               {props.subtitle}
            </SubTitle>
        </>
    )
}