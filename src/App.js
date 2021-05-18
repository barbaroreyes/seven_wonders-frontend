import React ,{useState,useEffect}from 'react';
import Seven from './compononents/seven'
import {Switch,Route,Link} from 'react-router-dom'
import './App.css';

function App() {
  const [seven,setSeven] = useState([])
  const url = 'https://new-app-deplo.herokuapp.com'
const getAll = () => {
  fetch(url +'/sevenw/')
  .then(response => response.json())
  .then(data => {
    setSeven(data)
    console.log(data)
  })
 
}
useEffect(()=>{
  getAll()
},[])

  //

  return (
    <div className="App">
      <h1>Seven Wonders</h1>
      <Link to='/'><button>add a wonder</button></Link>
    <Switch>
      <Route  exact path='/'>
        <Seven seven={seven}/>
      </Route>
    </Switch>
     
    </div>
  );
}

export default App;
