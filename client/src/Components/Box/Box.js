import React,{useEffect, useState} from 'react';
import Progress from '../Progress/Progress';

// const colors = ["red", "yellow", "green", "blue", "black", "white", "gray", "purple", "pink", "orange"];
// const color = colors[Math.floor(Math.random()*8)];


function Box({color}) {
  const  [count, setCount] = useState(0);




  useEffect(()=>{
    console.log(count)
  })

  
  return (
    <>
    <div className='box' onClick={ ()=>setCount(count +1) }  style ={{backgroundColor:(color)}}>
       <button >{count}</button>
      <Progress count={count}/>
    </div>
    </>
  )
}

export default Box;