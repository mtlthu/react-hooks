import { useReducer, useRef } from "react";
import reducer, {initState} from "./reducer";
import {addJob, setJob, deleteJob} from './actions';
import logger from "./logger";


function ToDoAppWithUseReducer() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const inputRef = useRef();

  const handleSubmit =() => {
    dispatch(addJob(job));
    dispatch(setJob(''));
    inputRef.current.focus();

  }

  const {job, jobs} = state;

  return (
    <div className="UseReducer" style={{padding: 32}}>
      <h1>Todo</h1>
      <input 
      ref={inputRef}
      value={job}
       placeholder="Enter todo..."
       onChange={e => {
        dispatch(setJob(e.target.value))
       }}/>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job,index) =>(
          <li key={index}>{job}
          <span onClick={() => dispatch(deleteJob(index))}> &times;</span> </li>
        ))}
      </ul>
    </div>

    
  );
}

export default ToDoAppWithUseReducer;
