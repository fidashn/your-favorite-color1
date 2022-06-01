import React, {useEffect, useState} from 'react';
import Counter from './Components/Counter/Counter';
import Progress from './Components/Progress/Progress';
import './App.css';





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
    <Counter />
    <Progress done="200px"/>


      {(typeof backendData.users==='undefined') ?
      (<p>Loading...</p>) :
      (backendData.users.map((user, i) =>(<p key={i}>{user}</p>))
      )}
    </>
  )
}

export default App;
