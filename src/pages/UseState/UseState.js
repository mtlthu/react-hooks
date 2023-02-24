import { useState } from "react";

const orders =[100, 200, 300];

function UseState() {
  const [counter, setCounter] = useState(()=>{
    const total = orders.reduce((total, cur) => total + cur);
    console.log(total);
    return total;
  });

  const handleIncrease= () => {
    setCounter(counter + 1);
  }

  return (
    <div className="UseState" style={{padding: 32}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>

    
  );
}

export default UseState;
