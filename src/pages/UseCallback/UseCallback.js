import { useState, useCallback } from "react";
import Content from "./Content";


function UseCallback() {
  const [count, setCount] = useState(0);

  const handleIncrease =useCallback(() => {
    setCount(prevCount => prevCount + 1);
  },[])

  return (
    <div className="UseState" style={{padding: 32}}>
      <Content onIncrease ={handleIncrease}/>
      <h1>{count}</h1>
    </div>

    
  );
}

export default UseCallback;
