import React,{useEffect, useState} from 'react';

const colors = ["red", "yellow", "green", "blue", "black", "white", "gray", "purple", "pink", "orange"];
const color = colors[Math.floor(Math.random()*8)];


function Counter() {
  const  [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(count)
  })
  return (
    <>
    <div className='box' onClick={ (counting)=>setCount(count +1) }  style ={{backgroundColor:(color)}}>
       <button >{count}</button>
    </div>
    </>
  )
}

export default Counter