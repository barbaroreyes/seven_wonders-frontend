import React from 'react'

const Seven = ({seven}) => {
  return (
    <div className="dad">
       {seven.map((item,i)=>{
           return (<div  className="chil"key={i}>
               {item.name}
               <img src={item.img} alt={item.name}/>
               <p>{item.description}</p>
               </div>)
       })}
    </div>
  )
}

export default Seven
