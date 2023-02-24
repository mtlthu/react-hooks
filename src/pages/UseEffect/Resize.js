import { useEffect, useState} from "react";


function Resize() {

const [width, setWidth] = useState(window.innerHeight);

useEffect(() => {
  const handleResize = () =>{
    setWidth(window.innerHeight);
  }
  window.addEventListener('resize', handleResize);
  // Cleanup Function
  return () =>{
    window.removeEventListener('scroll', handleResize);
   }
}, [])
  
  return (
    <div className="UseEffect" style={{padding: 32}}>
     <h1>{width}</h1>
    </div>
  );
}

export default Resize;
