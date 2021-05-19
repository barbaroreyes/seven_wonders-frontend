import React from 'react'

const Seven = ({seven,selectW,history,handleDeleteW}) => {
    
  return (
    <div className="dad">
       {seven.map((item,i)=>{
           return (<div  className="chil"key={i}>
               {item.name}
               <img src={item.img} alt={item.name}/>
               <p>{item.description}</p>
               <button onClick={() =>{
                   selectW(seven)
                   history.push("/edit")
                   }}>Edit</button>
               <button onClick={() =>{handleDeleteW(seven)}}>Delete</button>
               </div>)
       })}
    </div>
  )
}

export default Seven
