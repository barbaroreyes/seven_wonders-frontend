import React ,{useState,useEffect}from 'react';
import Seven from './compononents/seven'
import {Switch,Route,Link} from 'react-router-dom'
import './App.css';
import Form from './compononents/form';

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
const emptyW = {
  name: "",
  description: "",
  img: "",
};
const [selectedW,setSelectedW]= useState(emptyW)

useEffect(()=>{
  getAll()
},[])

const handleCreate = (newWonder) => {
  fetch(url +'/sevenw/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWonder),
  }).then(() => getAll());
};

 const selectFw = (seven)=>{
   setSelectedW(seven)
 }
 const handleDeleteW = ()=> {
  fetch(url +'/sevenw/' + seven._id, {
    method: "delete"
  })
  .then(() => {
    getAll()
  })
 }

  return (
    <div className="App">
      <h1>Seven Wonders</h1>
      <Link to='/create'>
      <button>add a wonder</button></Link>
    <Switch>
      <Route  
      exact 
      path='/'
      render={(rp)=>(
        <Seven 
        {...rp}
        seven={seven}
        selectW={selectFw}
        handleDeleteW={handleDeleteW}
        />
      )}
      
      />
       
      
      <Route path='/create'
      render={(rp)=>(
        <Form 
        {...rp}
        label='create'
        seven={emptyW}
        handleSubmit={handleCreate}
        />
      )}
      />
       
      
    </Switch>
     
    </div>
  );
}

export default App;
