import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import PropsWithFun from "./components/PropsWithFun";
import PropsWithClass from "./components/PropsWithClass";
import StateExample from "./components/StateExample";
import Count from "./components/Count";
import FunClick from "./components/FunClick";
import ClassClick from "./components/ClassClick";
import Parent from "./components/Parent";

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
      {/* <StateExample></StateExample> */}
      {/* <Count></Count> */}
      {/* <FunClick></FunClick>
      <ClassClick></ClassClick> */}
      <Parent></Parent>
      </header>
    </div>
  )
}

export default App;
