/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';


import PromptModal from '../../Components/Todo/Modal/PromptModal/PromptModal';
import { TodoList } from '../../Components/Todo/TodoList/style';
import AddTodo from './../../Components/Todo/AddTodo/AddTodo';

const TodoContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    width: 100%;
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
                <AddTodo onChange={onChange} onKeyUp={onKeyUp} value={input.content} onAdd={onAdd}/>
                {todoList.map(
                    todo => {
                        return (
                            <TodoList todo = {todo} openModal={openModal} onRemove={onRemove} />
                        );
                    }
                )}                
            </div>
            {isOpen ? (<PromptModal title={'Edit Todo'} todo = {modifyTodo} setIsOpen = {setIsOpen} updateTodo = {updateTodo} />) : ''}
        </> 
    );
};

export default Todo;

