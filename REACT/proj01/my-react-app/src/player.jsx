import { useState } from "react";

export default function Player(){

const [count,setCount]=useState(0);


const boomSakalaka=()=>{
    const cc =count +1;
    setCount(cc);
}

return(
    <>
    <h1>player Number:{count}</h1>
    <button onClick={boomSakalaka}> Tap Tap</button>
    </>
)
}