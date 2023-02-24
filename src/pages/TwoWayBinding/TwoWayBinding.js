import { useState } from "react";
import RandomGift from './RandomGift';
import TwoWayBindingRadio from './TwoWayBindingRadio';
import TwoWayBindingCheckBox from './TwoWayBindingCheckBox';


function TwoWayBinding() {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
      //CALL API
     
    }

  return (
    <div className="TwoWayBinding" style={{padding: 32}}>
        {/* <RandomGift/> */}

        <input
        value={name}
        onChange={e => setName(e.target.value)}
        />
         <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Register</button>

        <TwoWayBindingRadio/>
        <TwoWayBindingCheckBox/>
        
    </div>

    
  );
}

export default TwoWayBinding;



