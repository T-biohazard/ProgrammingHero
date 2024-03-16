import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './counter'
import './App.css'
import Player from './player'
import UseEffect from './useEffect'

function App() {
  

function handleClick(){
  alert('button clickled')
}


const handleClick2=()=>{
  alert('butt 2 XD')
}

  return (
    // <>fergment
    <>
      
      <h1>My React app</h1>
      <UseEffect></UseEffect>
      <Counter></Counter>
      <button onClick={handleClick}>Click here</button>
      <button onClick={handleClick}>Click there</button>
      <Player></Player>
      {/* arrow func */}
      <button onClick={()=>{alert('thired butt XD2')}}>
Click nowhere
      </button>
     
    </>
  )
}

export default App

// http://localhost:5173/