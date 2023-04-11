import React, { Component } from 'react';

class AppClass extends Component {
    constructor(props){
        super(props); //부모생성자 호출. 생성자 첫줄에 위치해야함.
        //props : 부모 => 자식으로 값을 보내기 위한 수단. 역방향은 불가. 부모=> 자식만 가능. 단반향 컴포넌트.
        this.state={name:"홍길동", age:"23", phone:"010-0000-0000"};
        //state객체가 각 컴포넌트마다 반드시 존재. json 타입 저장 가능. 
        //별도의 변수는 사용 불가능.
    }
    render() {
        const {name, age, phone} = this.state; //이 한 줄이
        //const name = this.state.name;
        //const age = this.state.name; //이 두 줄과 같은 역할.

        
        const {address, title} = this.props; //해체는 모던스크립트 문법.
        return (
            <div>
                <h3>제목 : {this.props.title}</h3>
                <h3>이름 : {this.state.name}</h3>
                <h3>이름 : {name}</h3>
                <h3>나이 : {this.state.age}</h3>
                <h3>나이 : {age}</h3>
                
                <h3>연락처 : {this.state.phone}</h3> 
                <h3>주소 : {this.props.address}</h3> 
                
                {/* phone은 해체안했음. */}
            </div>
        );
    }
}

export default AppClass;