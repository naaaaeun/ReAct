import React, { useState } from 'react';

function Calc(pops){
    const [name, setName] =useState("");
    const [kor, setKor] =useState("");
    const [eng, setEng] =useState("");
    const [mat, setMat] =useState("");
    const [result, setResult] =useState("");

    const nameChange=(e)=>{
        setName(e.target.value);
    };
    const korChange=(e)=>{
        setKor(parseInt(e.target.value));
    };
    const engChange=(e)=>{
        setEng(parseInt(e.target.value));
    };
    const matChange=(e)=>{
        setMat(parseInt(e.target.value));
    };
    function sum(){
        let sum= kor+eng+mat;
        let avg=sum/3;
        setResult(`${name}의 점수 합계 : ${sum} 평균 : ${avg}`);
    }
    return (
        <div>
        이름 : <input type="text" placeholder='name' onChange={nameChange}/><br/>
        국어 : <input type="text" placeholder='국어' onChange={korChange}/><br/>
        영어 : <input type="text" placeholder='영어' onChange={engChange}/><br/>
        수학 : <input type="text" placeholder='수학' onChange={matChange}/><br/>
        <button type='button' onClick={sum} >결과 확인</button> <br/>
        결과: <span>{result}</span>
        </div>
    )
}

export default Calc;