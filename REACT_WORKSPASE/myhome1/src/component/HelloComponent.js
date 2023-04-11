import React, { Component } from 'react';

class HelloComponent extends Component {
    sayHello() {
        alert("hello")
    }
    render() {
        return (
            <div>
                <h1>함수호출하기</h1>
                <button type='button' onClick={this.sayHello}>클릭</button>
            </div>
        );
    }
}

export default HelloComponent;