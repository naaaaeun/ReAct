import './App.css';
import {Routes, Route} from "react-router-dom"

import Layout from "./layout/Layout"
import Home from "./component/Home"
import BoardList from './component/board/BoardList';
import BoardWrite from './component/board/BoardWrite';
import BoardView from './component/board/BoardView';

import HeroList from './component/hero/HeroList';
import HeroWrite from './component/hero/HeroWrite';

import ScoreList from './component/score/ScoreList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/score/list" element={<ScoreList/>}/>
          <Route path="/board/list" element={<BoardList/>}/>
          <Route path="/board/write" element={<BoardWrite/>}/>
          <Route path="/hero/list" element={<HeroList/>}/>
          <Route path="/hero/write" element={<HeroWrite/>}/>
          <Route path="/hero/view/:id" element={<HeroWrite/>}/> 
          <Route path="/board/view/:id" element={<BoardWrite/>}/> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
