import React, { useState } from 'react';
import {MdRemove, MdAdd} from 'react-icons/md';
	
function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => (count >=10) ? setCount(count) : setCount(count+1);
    const decrement = () => (count <= 0) ? setCount(count) : setCount(count-1);


    
    return (
      <div>
        <MdRemove onClick = {decrement} /> 
	     <span>{count}</span>
	      <MdAdd onClick={increment} />
      </div>
     );
}
	
export default Counter;