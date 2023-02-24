import { useEffect, useState} from "react";


function Timer() {

const [countdown, setCountdown] = useState(180);
// CACH 1
useEffect(() => {
  const timerId = setInterval(() => {
    setCountdown(preState => preState - 1);
  }, 1000);
  return ()=> clearInterval(timerId);
}, [])

// CACH 2
// useEffect(() => {
//   const timerId = setTimeout(() => {
//     setCountdown(countdown - 1);
//   }, 1000);
//   return ()=> clearTimeout(timerId);
// }, [countdown])
  
  return (
    <div className="UseEffect" style={{padding: 32}}>
     <h1>{countdown}</h1>
    </div>
  );
}

export default Timer;
