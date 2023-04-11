import logo from './logo.svg';
import './App.css';
import Mycomponent1 from './component/Mycomponent1';
import AppClass from './component/AppClass';
import AppClass2 from './component/AppClass2';
import InputTest from './component/InputTest';

function App() {
  return (
    <div className="App">
      <Mycomponent1/>
      <AppClass address="서울시 성동구" title="인적사항"/> 
      <AppClass2 address="서울시 관악구" title="인적사항"/> 
      <InputTest/>
      <button type='buttom' onClick={()=>{alert('press')}}>클릭</button>
      {/* 이  값을 pops이 받는다. */}
    </div>
  ); 
}

export default App;
