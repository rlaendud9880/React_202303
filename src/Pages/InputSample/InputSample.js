
import React, { useRef, useState } from 'react';

const InputSample = () => {

    const userInfo = {
        username : '',
        password : '',
    }

    const [userInput, setUserInput] = useState(userInfo);
    const [userInfoText, setUserInfoText] = useState(userInfo);

    const { username, password } = userInfoText;

    const passwordRef = useRef();

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setUserInput({...userInput, [name]: value});
    }

    const nextFocus  = (e) => {
        if(e.keyCode === 13) {
            passwordRef.current.focus();

        }
    }

    const submitHandler = (e) => {
        if(e.keyCode === 13) {
            setUserInfoText({...userInput});
        }
    }

    return (
        <div>            
            <input 
                type="text" 
                onChange={handlerChange}
                onKeyUp={nextFocus}
                name="username" 
                
            />            
            <input 
                type="text" 
                onChange={handlerChange}
                onKeyUp={submitHandler}
                name="password" 
                ref={passwordRef}
            />
            
            <div>username : {username}</div>
            <div>password : {password}</div>
        </div>
    );
};

export default InputSample;