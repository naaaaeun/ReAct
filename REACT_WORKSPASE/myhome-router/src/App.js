import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Layout from './component/Layout';
import About from './component/About';
import Home from './component/Home';
import Fortest from './component/Fortest';
import Fortest2 from './component/Fortest2';
import Gugu from './component/Gugu';
function App() {
  return (
    <div className="App">
      <h1>라우터 연습</h1>      
      {/* 
      path=가상 url
      element=컴포넌트
       */}
      <Routes>
        <Route path='/' element={<Layout/>}> {/*전체적인 골격은 레이아웃에.*/}
          <Route index element={<Home/>}/> 
          <Route path='about' element={<About/>}/>
          <Route path='for1' element={<Fortest/>}/>
          <Route path='for2' element={<Fortest2/>}/>
          <Route path='gugu' element={<Gugu/>}/>
        </Route>
      </Routes>
      

    </div>
  );
}

export default App;
