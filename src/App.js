import './App.css';
import {Brand,Cta,Navbar} from './components/index'
import {Blogcontainer,Featurescontainer,Footercontainer,Gpt3container,Headercontainer,Posscontainer,FutureContainer} from './container/index'

function App() {
  return (
    <div className="App">
      <div className='gradiente'>
        <Navbar/>
        <Headercontainer/>
      </div>
      <Brand/>
      <Gpt3container/>
      <FutureContainer/>
      <Posscontainer/>
      <Cta/>
      <Blogcontainer/>
      <Footercontainer/>   
    </div>
  );
}

export default App;
