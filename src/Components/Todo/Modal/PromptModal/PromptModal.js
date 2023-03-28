/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import ModalButton from "../ModalButton/ModalButton";
import * as S from './style';

const PromptModal = (props) => {

    const modalRef = useRef();
    const [modalContent, setModalContent] = useState('');

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
        }, []
    );

    const closeModal = () => {
        props.setIsOpen(false);
    }

    const contentChange = (e) => {
        setModalContent(e.target.value);
    }

    const onSubmitKeyUp = (e) => {
        if(e.keyCode === 13) {
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
        <div css={S.modalContainer}>
            <div css={S.modalBox} ref={modalRef}>
                <header css={S.modalHeader}>
                    <h1 css={S.modalTitle}>{props.title}</h1>
                </header>
                <main css={S.modalMain}>
                    <input css={S.modalInput} type="text" onChange={contentChange} onKeyUp={onSubmitKeyUp} defaultValue={props.todo.content} />
                </main>
                <footer css={S.modalFooter}>
                    <ModalButton buttonCount={2} onClick={onSubmit}>확인</ModalButton>
                    <ModalButton buttonCount={2} onClick={closeModal}>취소</ModalButton>
                </footer>
            </div>
        </div>
    );
}

export default PromptModal;