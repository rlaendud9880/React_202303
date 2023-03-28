/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { FcPlus } from 'react-icons/fc';
import { BiPen } from 'react-icons/bi';
import { TiTrash }  from 'react-icons/ti';
import * as S from './style';

const PromptModal = (props) => {
    const modalRef = useRef();
    const [modalContent, setModalContent] = useState(''); // 모달창 input 상태 관리
    useEffect(
        () => {
            setModalContent(props.todo.content);

            const handler = (e) => {
                if(!modalRef.current.contains(e.target)){
                    props.setIsOpen(false);
                }
            }

            document.addEventListener('mousedown', handler);
            return () => {
                document.removeEventListener('mousedown', handler);
                
                
            }
        },[]
    );

    
    
    

    const closeModal = () => {
        props.setIsOpen(false);
    }

    const contentChange = (e) => {
        setModalContent(e.target.value);
    }

    const onSubmitkeyUp = (e) => {
        if(e.key === 13){ // Enter Key
            onSubmit();
        }
    }



    const onSubmit = () => {

        props.updateTodo({
            id: props.todo.id,
            content: modalContent
            
        });
        closeModal();
    
    }

    return (
        <div css = {S.modalContainer}  >
            <div css = {S.modalBox} ref={modalRef}>
                <header css = {S.modalHeader}>
                    <h1 css = {S.modalTitle}>{props.title}</h1>
                </header>
                <main css = {S.modalMain}> 
                    <input css={S.modalInput} type="text"  onChange={contentChange} onKeyUp={onSubmitkeyUp} defaultValue={props.content}/>
                </main>
                <footer css = {S.modalFooter}>
                    <button css = {S.modalButton} onClick = {onSubmit}>확인</button>
                    <button css = {S.modalButton} onClick = {closeModal}>취소</button>
                </footer>
            </div>            
        </div>

    );
}

export default PromptModal;