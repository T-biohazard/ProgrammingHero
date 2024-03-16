import { useEffect, useState } from "react"

function UseEffect(){
    
    const [posts,setPosts]=useState([]);
    
    useEffect(()=>{

        fetch('')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    
    
    return(
        <div>
            <h3>UseEffect on fetch</h3>
        </div>
    )
}