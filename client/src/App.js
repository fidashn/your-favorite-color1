import React, {useEffect, useState} from 'react';
import Box from './Components/Box/Box';
import './App.css';

const colors = ["red", "yellow", "green", "blue", "black", "brown", "gray", "purple", "pink", "orange"];

function App() {


const [backendData, setBackendData] = useState([{}])

useEffect (()=> {
  fetch("/api").then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
},[]) 

  return (
    <>
    <div className='boxes-wrapper'>
    {colors.map(color => <Box color={color}/>)}
    </div>

      {(typeof backendData.users==='undefined') ?
      (<p>Loading...</p>) :
      (backendData.users.map((user, i) =>(<p key={i}>{user}</p>))
      )}
    </>
  )
}

export default App;

