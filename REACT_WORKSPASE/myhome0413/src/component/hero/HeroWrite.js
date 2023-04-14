import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERIP } from '../../CommonUtil';
import { Link, useNavigate, useParams } from 'react-router-dom';


function HeroWrite(props) {
  let {id}=useParams();
  let history=useNavigate();

  const [heroName, setHeroName]=useState("");
  const [heroDesc, setHeroDesc]=useState("");

  useEffect(()=>{
    console.log("id",id);
    async function loadData(){
      let results= await axios.get(SERVERIP+"/hero/view/"+id);
      setHeroDesc(results.data.hero.hero_desc);
      setHeroName(results.data.hero.hero_name);
    }
    if(id!=undefined) loadData();

  },[]);

  const nameChange =(e)=>{
    setHeroName(e.target.value);
  }
  const descChange =(e)=>{
    setHeroDesc(e.target.value);
  }
  const postData =()=>{
    //데이터 json으로 전송하기
    let data={hero_name:heroName,hero_desc:heroDesc};
    axios.post(SERVERIP+"/hero/write",data)
    .then((res)=>{
      console.log(res.data);
      history("/hero/list")
    }).catch((error)=>{
      console.log(error);
    })
  }


    return (
      <div className="container"> 
      
      <table className="table table-hover " style={{marginTop: "30px"}}>
            <colgroup>
                <col width="25%"/>
                <col width="*"/>
            </colgroup>
        
            <tbody>
              <tr>
                <td>이름</td>
                <td>
                    <div className="mb-3" style={{marginTop: "13px"}}>
                        <input type="text" className="form-control" 
                        value={heroName}
                        placeholder="이름을 입력하세요" onChange={nameChange}/>
                    </div>
                </td>
              </tr>       
              <tr>
                <td>업적</td>
                <td>
                    <div className="mb-3" style={{marginTop: "13px"}}>
                        <input type="text" className="form-control" 
                        value={heroDesc}
                        placeholder="업적을 입력하세요" onChange={descChange}/>
                    </div>
                </td>
              </tr>              
            </tbody>
          </table>
       
          <div className="container mt-3" style={{textAlign: "right"}}>
            <Link href="#" className="btn btn-secondary" onClick={postData}>등록</Link> &nbsp;
            <Link href="#" className="btn btn-secondary">취소</Link>
          </div>

        </div>
    );
}

export default HeroWrite;