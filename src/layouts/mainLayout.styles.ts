import styled from "styled-components";
import { full } from "@styles/mixins.styles";

export const Wrap = styled.div`
    position: relative;
    ${full};
    overflow: hidden;
`
export const Content = styled.div`
    position: absolute; left:0;

    width:100vw;
`