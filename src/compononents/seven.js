import React from 'react'

const Seven = ({seven,selectFw,history,handleDeleteW}) => {
   const loaded = () => {
      
  return (
    <div className="dad">
       {seven.map((item,i)=>{
           return (<div  className="chil"key={i}>
               {item.name}
               <img src={item.img} alt={item.name}/>
               <p>{item.description}</p>
               <button onClick={() =>{
                   selectFw(item)
                   history.push("/edit")
                   }}>Edit</button>
               <button onClick={() =>{handleDeleteW(item)}}>Delete</button>
               </div>)
       })}
    </div>
  )
   }
   const loading =() => <h1>Loading...</h1>
   return  seven ? loaded() : loading()
}

export default Seven
