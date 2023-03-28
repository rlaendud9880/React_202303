import { css } from "@emotion/react";

export const TodoList = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 7px;
    padding: 10px;
    width: 600px;

    background-color: #fafafa;
`;

export const TodoContent = css`
    width: 85%;
    height: 40px;
`;

export const ItemGroup = css`
    display: flex;
    align-items: center;
    height: 40px;
`;