import React, { useState } from 'react';

function Fortest(props) {
    const[fruitList] = useState(['딸기','바나나','사과','배'])
    const goSelet=(index)=>{
        alert(fruitList[index]);
    }
    return (
        <div>
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

export default Fortest;