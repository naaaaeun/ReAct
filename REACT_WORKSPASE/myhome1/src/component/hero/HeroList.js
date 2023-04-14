//서버로부터 데이터 가져오기
//axios 설치 필요.
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function HeroList(props) {
    const[heroList, setHeroList]=useState([]);
    const[loading, setLoading]=useState(false); //데이터 수신 시 true로 바꾼다


    //useState함수가 값을 초기화 해주면 해당 값을 저장할 변수와 해당값을 변경하는 함수를 반환.
    //[]-> 배열을 저장할 변수반환, 배열값을 변환할 함수주소

    //첫번째 매개변수 - mount,update,unmount 될때 호출됨.
    //[]-변수:변수가 변경될때 호출.
    useEffect(()=>{
        //서버에서 데이터를 불러온다.
/*        console.log("useEffect 호출");
        setHeroList(heroList.concat([
            {id:1, name:"홍길동", descr:"율도국 세움"},
            {id:2, name:"이순신", descr:"나라를 구함"},
            {id:3, name:"세종대왕", descr:"한글 창제"}
        ]))
*/
        axios.get("http://localhost:9090/hero/list")
        .then(
            (res)=>{
                console.log(res);
                setHeroList(res.data);
                setLoading(true);
            }
        ).catch((res,status,error)=>{
            console.log(status);
        })
    },[]);

    return (
        <div>
            <table>
                {
                    (loading===true)?
                    heroList.map((item,index)=>{
                        return(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.hero_name}</td>
                                <td>{item.hero_desc}</td>
                            </tr>
                        )
                    })
                    :""
                }
            </table>
        </div>
    );
}

export default HeroList;