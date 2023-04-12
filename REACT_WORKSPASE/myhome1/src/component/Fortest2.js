import React, { useState } from 'react';

function Fortest2(props) {
    const[fruitList, setFruitList] = useState(['딸기','바나나','사과','배'])
    const[fruit, setFruit] = useState([''])

    //추가버튼을 누르면 friut변수의 값을 fruitList에 추가한다
    const onChange=(e)=>{
        setFruit(e.target.value);
    }
        //input 태그에서 값 입력하면 fruit변수에 값을 저장한다

    const goAppend=()=>{
        setFruitList(fruitList.concat(fruit));
        setFruit("");
    }       
        //배열의 push함수 사용못함, 원래 배열에 데이터 추가
        //배열 자체를 새로 만들어 바꿔치기를 해야 한다
        //push - 원래 배열메모리에 추가
        //concat - 새로운 배열을 만들어서 기존배열 내용복사하고 하나에 추가                                  
    const goSelet=(index)=>{
        alert(fruitList[index]);
    }
    return (
        <div>
            <input type='text' onChange={onChange} value={fruit}/>
            <button type='button'onClick={goAppend}>추가하기</button>
            <ul>
            {
                fruitList.map((item, index)=>{
                    return(
                        <li key={index}>
                            <a href='#' onClick={()=>{goSelet(index)}}>{item}</a>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    );
}

export default Fortest2;