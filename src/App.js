import './App.css';
import {Brand,Cta,Navbar} from './components/index'
import {Blogcontainer,Featurescontainer,Footercontainer,Gpt3container,Headercontainer,posscontainer} from './container/index'
import Posscontainer from './container/possibility/poss';

function App() {
  return (
    <div className="App">
      <div className='gradiente'>
        <Navbar/>
        <Headercontainer/>
      </div>
      <Brand/>
      <Gpt3container/>
      <Featurescontainer/>
      <Posscontainer/>
      <Cta/>
      <Blogcontainer/>
      <Footercontainer/>   
    </div>
  );
}

export default App;
