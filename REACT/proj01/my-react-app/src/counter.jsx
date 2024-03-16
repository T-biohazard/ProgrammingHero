
import { useState } from "react";

export default function Cvounter(){



const[count,setCount]=useState(0);

const handleAdd=()=>{
    const count1=count+1;
    setCount(count1) ;
}
const handleAdd2=()=>{
    const count1=count-1;
    setCount(count1) ;
}

    return(
       <div style={{border:'2px solid yellow'}}>
        <h1>Counter: {count} </h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleAdd2}>reduce</button>
       </div> 
    )
}