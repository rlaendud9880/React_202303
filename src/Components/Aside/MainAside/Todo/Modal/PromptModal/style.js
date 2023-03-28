import { css } from '@emotion/react';

export const modalContainer = css`
    position: flex;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    background-color: #000000aa;
    `;
export const modalBox = css`
    border-radius: 7px;
    width: 350px;
    height: 200px;
    background-color: #fafafa;
    overflow: hidden;
`;
export const modalHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    height: 40px;
`;

export const modalTitle = css`
    font-size: 18px;
    font-weight: 600;
`;

export const modalMain = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    height: 120px;
`;

export const modalInput = css`
    outline: none;
    border: none;
    border-bottom: 2px solid green;
    width: 90%;
    height: 30px;
    background-color: #fafafa;
`;

export const modalFooter = css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40px;
`;

export const modalButton = css`
    cursor: pointer;
    border: none;
    background-color: #ffffff00;
    width: 50%;
    height: 100%;
    font-weight: 600;
    &:first-child {
        border-right: 1px solid #dbdbdb;
    }
    &:hover{
        background-color: #eee;
    }
    &:active{
        background-color: #dbdbdb;
    }
`;