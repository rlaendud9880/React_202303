/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import { css } from '@emotion/react';


import PromptModal from '../../Components/Todo/Modal/PromptModal/PromptModal';
import TodoList from '../../Components/Todo/TodoList/TodoList';
import AddTodo from './../../Components/Todo/AddTodo/AddTodo';

const TodoContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    width: 100%;
`;



const Todo = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [modifyTodo, setModifyTodo] = useState({
        id: 0,
        content: ''
    });

    const [input, setInput] = useState({
        id: 0,
        content: ''
    });
    const [todoList, setTodoList] = useState([]);
    const todoId = useRef(1);

    const onChange = (e) => {
        setInput({
            ...input,
            content: e.target.value
        });
    }

    const onKeyUp = (e) => {
        if(e.keyCode === 13) {
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
        ))
    }

    const updateTodo = (modifyTodo) => {
        setTodoList(
            todoList.map(
                todo => {
                    if(todo.id === modifyTodo.id) {
                        todo.content = modifyTodo.content;
                    }
                    return todo;
                }
            )
        )
    }

    const openModal = (id) => {
        setModifyTodo(todoList.filter(
            todo => todo.id === id
        )[0]);

        setIsOpen(true);
    }

    return (
        <>
            <div css={TodoContainer}>
                <AddTodo onChange={onChange} onKeyUp={onKeyUp} value={input.content} onAdd={onAdd}/>
                {todoList.map(
                    todo => {
                        return (
                            <TodoList todo={todo} openModal={openModal} onRemove={onRemove}/>
                        );
                    }
                )}
            </div>
            {isOpen ? (<PromptModal title={'Edit Todo'} todo={modifyTodo} setIsOpen={setIsOpen} updateTodo={updateTodo} />) : ''}
            
        </>
    );
};

export default Todo;