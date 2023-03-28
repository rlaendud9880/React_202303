/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';

const UserList = () => {
    useEffect(() => {
        console.log("컴포넌트 렌더링");
    }, []);

    // 기본 사용자 객체와 수정 플래그 추가
    const user = {
        id: 0,
        username: '',
        password: '',
        name: '',
        email: '',
        modifyFlag: false // 수정 중인지 확인하는 플래그
    }

    const userIndex = useRef(1);
    const [users, setUsers] = useState([]); // 사용자 목록 상태
    const [inputs, setInputs] = useState(user); // 입력 필드 상태
    const inputRefs = [useRef(), useRef(), useRef(), useRef()]; // 입력 필드 참조
    const addButtonRef = useRef();

    // 입력값 처리 함수
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }

    // 엔터키 처리 함수
    const keyupHandler = (e) => {
        if(e.keyCode === 13) {
            let index = 0;
            switch(e.target.name) {
                case 'username': index = 1; break;
                case 'password': index = 2; break;
                case 'name': index = 3; break;
                default: addButtonRef.current.click();
            }
            if(index !== 0){
                inputRefs[index].current.focus();
            }
        }
    }

    // 사용자 추가 및 수정 함수
    const addHandler = () => {
        const user = {
            ...inputs
        };

        user.id = userIndex.current++;

        setUsers([...users, user]);
    }

    // 사용자 삭제 함수
    const onRemove = (index) => {
        setUsers(users.filter(user => user.id !== index));
    }

    // 사용자 수정 함수
    const onModify = (index) => {
        setUsers(users.map(user => {
            if(user.id === index) {
                setInputs({...user});
                user.modifyFlag = true;
            }else {
                user.modifyFlag = false;
            }
            return user;
        }));
    }

    // 사용자 정보 저장 함수
    const onSave = (index) => {
        setUsers(users.map(user => {
            if(user.id === index) {
                return {
                    ...inputs,
                    id: user.id
                };
            }
            return user;
        }));
    }


    return (
        <div css={S.Container}>
            <div>
                {/* 입력 필드 및 추가 버튼 */}
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' ref={inputRefs[0]}/>
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' ref={inputRefs[1]}/>
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' ref={inputRefs[2]}/>
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' ref={inputRefs[3]}/>
                <button type='button' onClick={addHandler} ref={addButtonRef}>추가</button>
            </div>
            <table css={S.Table}>
                <thead>
                    <tr>
                        <th css={S.ThAndTd}>index</th>
                        <th css={S.ThAndTd}>username</th>
                        <th css={S.ThAndTd}>password</th>
                        <th css={S.ThAndTd}>name</th>
                        <th css={S.ThAndTd}>email</th>
                        <th css={S.ThAndTd}>update</th>
                        <th css={S.ThAndTd}>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 사용자 목록을 반복하여 행 생성 */}
                    {users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td css={S.ThAndTd}>{user.id}</td>
                                {/* 수정 모드일 때 입력 필드, 아닐 때 일반 텍스트 표시 */}
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' ref={inputRefs[0]} defaultValue={user.username} />) : user.username}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' ref={inputRefs[1]} defaultValue={user.password} />) : user.password}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' ref={inputRefs[2]} defaultValue={user.name} />) : user.name}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' ref={inputRefs[3]} defaultValue={user.email} />) : user.email}</td>
                                <td css={S.ThAndTd}>
                                    {/* 수정 버튼 또는 확인 버튼 표시 */}
                                    {user.modifyFlag 
                                        ? (<button onClick={() => onSave(user.id)}>확인</button>)
                                        : (<button onClick={() => onModify(user.id)}>수정</button>) 
                                    }
                                </td>
                                <td css={S.ThAndTd}>
                                    <button onClick={() => onRemove(user.id)}>삭제</button>    
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;