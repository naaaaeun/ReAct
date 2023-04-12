
import './App.css';
import HelloComponent from './component/HelloComponent';
import Iftest from './component/Iftest';
import Fortest from './component/Fortest';
import Fortest2 from './component/Fortest2';
import Hero from './component/Hero';
import Gugu from './component/Gugu';
import HeroList from './component/HeroList';
import HeroWrite from './component/HeroWrite';
function App() {
  return (
    <div className="App">
      <h1 className='title'>제목1 </h1>
      {/* <HelloComponent/>
      <Iftest/>
      <Fortest/>
      <Fortest2/> 
      <Hero/>
      <Gugu/>*/} 
      <HeroList/>
      <HeroWrite/>
    </div>
  );


}

export default App;
