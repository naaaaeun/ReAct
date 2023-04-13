import React, { useState } from 'react';

function Gugu(props){
    const[x,setX] =useState(0);
    const[iList,setIList] =useState([1,2,3,4,5,6,7,8,9]);
    const[flag, setFlag] = useState(false);

    const xChange=(e)=>{
        setX(parseInt(e.target.value));
    }
    const goBoolean=(e)=>{
        (x>0&&x<10)?(setFlag(true)):setFlag(false); //토글.
    }
    return (
        <div>
            x: <input type="text" onChange={xChange} /><br/>
            <button type="button" onClick={goBoolean}>계산</button> <br/>
            
            <ul>
                {
                flag?(iList.map((item, index)=>{
                return(
                    <li key={index}>
                        {x}x{index+1}={x*(index+1)}
                    </li>
                )
                }))
                :'1~9 사이의 숫자로 입력하세요.'
            }
            
            </ul>

        </div>
    );
}

export default Gugu;