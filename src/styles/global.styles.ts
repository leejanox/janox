import { createGlobalStyle } from "styled-components";
import { darkColor, lightColor } from "./theme.styles";

interface GlobalStyleProps{
    mode:string
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    @font-face {
        font-family: 'FiraCodeVF';
        src:url('src/fonts/woff2/FiraCode-VF.woff2') format('woff2-variations'),
            url('src/fonts/woff/FiraCode-VF.woff') format('woff-variations');
        font-weight: 300 900; //가변글꼴 font 굵기 범위지정
        font-style: normal;
    }
    /* reset-css */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border:none;
    }
    html{
        font-size: 14px; //1rem : 14px
    }
    body{
        width: 100vw;
        height: 100vh;
        font-family: 'FiraCodeVF';
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        color:${(props)=>props.mode===`light`?lightColor.textColor:darkColor.textColor||'black'};
        background-color: ${(props)=>props.mode===`light`?lightColor.bgColor:darkColor.bgColor||'white'};
    }    
    
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote::before, blockquote::after,
    q::before, q::after {
        content: '';
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        max-width: 100%;
        display: block;
    }
`