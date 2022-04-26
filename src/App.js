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
      <div className='brandgradiente'>
        <Brand/>
      </div>
     
      <Gpt3container/>
     
      <FutureContainer/>
      <Posscontainer/>
      <Cta/>
      <Blogcontainer/>
      <div className='degradado'>
        <Footercontainer/>  
      </div>
      
    </div>
  );
}

export default App;
