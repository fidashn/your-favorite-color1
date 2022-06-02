import React,{useEffect, useState} from 'react';
import Progress from '../Progress/Progress';


function Box({color}) {
  const  [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(count)
  })
  
  return (
    <>
    <div className='box' onClick={ ()=>setCount(count +1) }  style ={{backgroundColor:(color)}}>
    <Progress count={count}/>
    </div>
    </>
  )
}

export default Box;