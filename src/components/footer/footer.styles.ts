import { darkColor, lightColor, theme } from "@styles/theme.styles";
import styled from "styled-components";

type footerStyle = {
    height?:number;
    textColor?:string;
    mode:string;
}

export const Footer = styled.footer<footerStyle>`
    position: absolute; bottom: 0; left: 0;

    width: 100vw;
    height: ${({height})=>height?`${height}rem`:theme.height.footerHright};

    display:flex;
    align-items:center;
    //justify-content:right;
    //padding-right:1rem;

    color: ${({textColor,mode})=>textColor?`#${textColor}`:mode===`light`?lightColor.textColor:darkColor.textColor};
`