import React, { useState } from 'react';

function Iftest(props){
    const[flag, setFlag] = useState(true);
    const changeFlag= ()=>{
        setFlag(!flag); //토글.
    }
        return (
            <div>
                <h2>if테스트 {flag}</h2>
                <button type='button' onClick={changeFlag}>토글</button>
                <p>{flag?`이 문구가 보입니다. `:``}</p> 
{/* 삼항연산자만 가능 */}
            </div>
        );
}

export default Iftest;