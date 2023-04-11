import React, { useState } from 'react';

function InputTest(pops){
    const [name, setName] =useState("");
    const [age, setAge] =useState(  );
    const [email, setEmail] =useState("");


    //람다식 아닌 일반함수면 생성자에서 바인딩 프로세스 진행 필요.
    const nameChange=(e)=>{
        //인자가 발생한 이벤트에 대한 모든 정보를 가지고 있음.
        //console.log(e.target.value);
        setName(e.target.value);
    };
    const ageChange=(e)=>{
        setAge(e.target.value);
    };
    const emailChange=(e)=>{
        setEmail(e.target.value);
    };
    let style ={
        color:"white",
        backgroundColor:"blue",
        fontSize:"20px",
        padding : "20px 10px 20px 10px"
    }
        return (
            <div>
                이름 : <input type="text" placeholder='name' onChange={nameChange}
                                style={{color:"red", backgroundColor:"lightblue"}} /><br/>
                나이 : <input type="text" placeholder='age' onChange={ageChange} style={style}/><br/>
                email : <input type="text" placeholder='email' onChange={emailChange}/><br/>
                <p>{name}{age}{email}</p>
            </div>
        );
}

export default InputTest;