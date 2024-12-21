import styled from "styled-components";
import { theme } from "@styles/theme.styles";
import { flexRow, itemBetween, itemCenter } from "@styles/mixins.styles";

type headerStyle = {
    height?:number;
}

export const header = styled.header<headerStyle>`
    position: absolute; top: 0; left: 0;

    width: 100vw;
    height: ${({height})=>height?`${height}rem`:theme.height.headerHeight};

    ${flexRow};
    ${itemBetween};

    z-index:1000;
    padding: 0 1.5rem; 

    background-color:transparent;
`
export const navMenu = styled.div`
    width: auto;
    height: inherit;

    ${flexRow};
    ${itemCenter};

    gap: 1rem;

    font-weight: 500;
`
