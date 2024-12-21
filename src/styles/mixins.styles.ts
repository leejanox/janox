import { css } from "styled-components";

export const full = css`
    width: 100vw;
    min-height: 100vh;
`
export const flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const flexRow = css`
    display: flex;
    flex-direction: row;
`

export const flexCol = css`
    display: flex;
    flex-direction: column;
`

export const itemCenter = css`
    align-items: center;
    justify-content: center;
`

export const itemBetween =css`
    align-items: center;
    justify-content: space-between;
`

export const textDeco = css`
    line-height: 1.5rem;
    letter-spacing: 0.15rem;
    word-spacing: 0.5rem;
    white-space: pre;
    text-decoration: none;
`