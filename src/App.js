import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import PropsWithFun from "./components/PropsWithFun";
import PropsWithClass from "./components/PropsWithClass";
import StateExample from "./components/StateExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
{/*       <Greet></Greet>
      <Welcome></Welcome>
      <Hello></Hello>
      <PropsWithFun name='Srinu' surName='Tangudu'>
        <p>This is Children</p>
      </PropsWithFun>
      <PropsWithFun name='Siva' surName='Borigi'>
       <button>Success</button>
      </PropsWithFun>
      <PropsWithFun name='Sarath' surName='Sana'></PropsWithFun>
      <PropsWithClass name='Hari' surName='Sana'></PropsWithClass> */}
      <StateExample></StateExample>
      </header>
    </div>
  )
}

export default App;
