import styled from "styled-components";
import Button from "./button";
import { flexCenter } from "@styles/mixins.styles";
import { darkColor, lightColor } from "@styles/theme.styles";

interface ButtonProps{
    mode:string; 
}

export const ModeChange = styled(Button)<ButtonProps>`
    width: 2rem;
    height: 2rem;

    cursor: pointer;

    ${flexCenter};
    background-color: transparent;
    border: 0.5px;
    border-style: solid;
    opacity: 0.7;
    border-color: ${({mode})=>mode===`light`?lightColor.textColor:darkColor.textColor};
    border-radius: 1rem;
    padding: 0.2rem;

    svg{
        width: inherit;
        height: inherit;

        color: ${({mode})=>mode===`light`?lightColor.textColor:darkColor.textColor};
    }
`
export const CountButton = styled(Button)`
`

export const RotateButton = styled(Button)<ButtonProps>`
    position: absolute; top: 90%; left: 11%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1000;

    width: 2rem;
    height: 2rem;

    ${flexCenter}
    background-color: transparent;
    border: none;

    cursor: pointer;

    svg{
        width: 2rem;
        height: 2rem;
        color: ${({mode})=>mode === 'light'?lightColor.textColor:darkColor.textColor};
    }
`