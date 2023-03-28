import React from 'react';
import * as S from './style';
import { FcPlus } from 'react-icons/fc';

const AddTodo = ({ onChange, onKeyUp, value, onAdd}) => {
    return (
        <div css = {S.TodoAddition}>
            <input css={S.AdditionInput} type="text" placeholder='할 일을 입력하세요.'  onChange={onChange} onKeyUp={onKeyUp} value={value}/>
            <button css = {S.TodoAddButton} onClick={onAdd}><FcPlus /></button>
        </div>
    );
};

export default AddTodo;