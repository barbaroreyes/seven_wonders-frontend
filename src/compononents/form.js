import React,{useState} from 'react'

 const Form = (props) => {
     console.log(props.seven)
     const [formData,setFormData]= useState(props.seven)
      

     const handleSubmit = (event) => {
        event.preventDefault(); // Prevent Form from Refreshing
        props.handleSubmit(formData); // Submit to Parents desired function
        props.history.push("/"); //Push back to display page
      };

      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
             name='name'
             value={formData.name}
             onChange={handleChange}
             placeholder='place'
            />
            <input 
            type="text"
            name='img'
             value={formData.img}
             onChange={handleChange}
             placeholder='url'
             />
              <textarea 
            type="text"
            name='description'
             value={formData.description}
             onChange={handleChange}
             placeholder='description'
             />
             <input type="submit" value={props.label} />

        </form>
    )
}
export default Form