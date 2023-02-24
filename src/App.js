import { useState, createContext } from "react";

import UseState from "./pages/UseState/UseState"; 
import TwoWayBinding from "./pages/TwoWayBinding/TwoWayBinding"
import ToDoList from "./pages/ToDoList/ToDoList";
import UseEffect from "./pages/UseEffect/UseEffect";
import UseRef from "./pages/UseRef/UseRef";
import UseCallback from "./pages/UseCallback/UseCallback";
import UseMemo from "./pages/UseMemo/UseMemo";
import UseReducer from "./pages/UseReducer/UseReducer";
import ToDoAppWithUseReducer from "./pages/ToDoAppWithUseReducer";
import Context from "./pages/Context/Context";
import './App.css'

const ThemeContext = createContext();
console.log('ThemeContext :',ThemeContext);

function App() {
  const [show, setShow] = useState(false);


   return (
    <div className="App" style={{padding: 32}}>
     <UseState/>
     <TwoWayBinding/>
     <ToDoList/>
     <button onClick={() => setShow(!show)}>Toggle</button>
     {show && <UseEffect/>}

     <UseRef/>
     <UseCallback/>
     <UseMemo/>
     <UseReducer/>
     <ToDoAppWithUseReducer/>

      <Context/>


    </div>

    
  );
}

export default App;
