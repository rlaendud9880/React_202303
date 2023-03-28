/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { FcPlus } from 'react-icons/fc';
import { BiPen } from 'react-icons/bi';
import { TiTrash }  from 'react-icons/ti';
import PromptModal from './../../Components/Aside/MainAside/Todo/Modal/PromptModal/PromptModal';

const TodoContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    width: 100%;
`;

const TodoAddition = css`
    position: sticky;
    top: 0px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border-radius: 7px;
    padding: 10px;
    width: 600px;
    height: 60px;
    background-color: #eee;    
`;

const AdditionInput = css`
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 3px solid white;
    padding: 0px 50px 0px 10px;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    background-color: #eee;
    &:hover{
        transform: rotate(360);
    }
`;

const TodoAddButton = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
    background-color: #ffffff00;
    transition: all 1s ease;
    cursor: pointer;
    &:hover{
        transform: translateY(-50%) rotate(3090deg) scale(1.5);
    }

`;

const TodoList = css`
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

const TodoContent = css`
    width: 85%;
    height: 40px;   
`;

const ItemGroup = css`
    display: flex;
    align-items: center;
    height: 40px;

`;

const ItemButton = css`
    display: flex;
    align-items: center;
    border: none;
    height: 100%;
    color: #999;
    background-color: #ffffff00;
    &:hover{
        color: #121212;
    }
`;

const Todo = () => {
    const [modifyTodo, setModifyTodo] = useState({
        id: 0,
        content: ''
    }); // 수정할 유저 정보

    const [isOpen, setIsOpen] = useState(false); // 모달창 열기/닫기
    const [input, setInput] = useState({
        id: 0,
        content: ''
    }); // input 상태 관리

    const [todoList, setTodoList] = useState([]);
    const todoId = useRef(1);

const onChange = (e) => {
    setInput({ // input 객체를 새로 만들어서 넣어준다.
        ...input, // 기존의 input 객체를 그대로 가져와서 넣어준다.
        content: e.target.value // content는 e.target.value를 넣어준다.
    }); // 이렇게 하면 input 객체가 새로 만들어지고, 그 객체가 input에 들어가게 된다.
}

const onKeyUp = (e) => {
    if(e.key === 13){ // Enter Key
       onAdd();
    }
}

const onAdd = () => { 
    const todo = { 
        ...input,
        id: todoId.current++
    }
    setTodoList([...todoList, todo]);
    setInput({
        ...input,
         content: ''
    });
}

const onRemove = (id) => {
    setTodoList(todoList.filter(
        todo => {
            return todo.id !== id;
        }
    ));
}

const updateTodo = (modiftTodo) => {    
    setTodoList(
        todoList.map(
            todo => {
                if(todo.id === modiftTodo.id) {
                    todo.content = modiftTodo.content;
                }
                return todo;
            }
        )
    )
}


const openModal = (id) => { // 수정할 유저 정보를 가져온다.
    setIsOpen(true); // 모달창 열기
    setModifyTodo(todoList.filter(
        todo => todo.id === id
    )[0]);
}


const modalContainer = css`
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
const modalBox = css`
    border-radius: 7px;
    width: 350px;
    height: 200px;
    background-color: #fafafa;
    overflow: hidden;
`;
const modalHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    height: 40px;
`;

const modalTitle = css`
    font-size: 18px;
    font-weight: 600;
`;

const modalMain = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    height: 120px;
`;

const modalInput = css`
    outline: none;
    border: none;
    border-bottom: 2px solid green;
    width: 90%;
    height: 30px;
    background-color: #fafafa;
`;

const modalFooter = css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40px;
`;

const modalButton = css`
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






    return (
        <>
            <div css ={TodoContainer}>
                <div css = {TodoAddition}>
                    <input css={AdditionInput} type="text" placeholder='할 일을 입력하세요.'  onChange={onChange} onKeyUp={onKeyUp} Value={input.content}/>
                    <button css = {TodoAddButton} onClick={onAdd}><FcPlus /></button>
                </div>
                {todoList.map(
                    todo => {
                        return (
                            <div css = {TodoList} key={todo.id}>
                                <div css = {TodoContent}>{todo.content}</div>
                                <div css = {ItemGroup}>
                                    <button css = {ItemButton} onClick={() => openModal(todo.id)}><BiPen /></button>
                                    <button css = {ItemButton} onClick={() => onRemove(todo.id)}><TiTrash /></button>
                                </div>
                            </div>
                        );
                    }
                )}                
            </div>
            {isOpen ? (<PromptModal title={'Edit Todo'} todo = {modifyTodo} setIsOpen = {setIsOpen} updateTodo = {updateTodo} />) : ''}
        </> 
    );
};

export default Todo;

