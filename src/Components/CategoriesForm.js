import axios from "axios"
import { useState } from "react"
function CategoriesForm(props)
{
    const[name,setName]=useState('')
    const[formErrors,setFormErrors]=useState({})
    const errors={}
    
    const validateErrors=()=>
    {
        if(name.trim().length===0)
        {
            errors.name='name is required' //here name is a property name it could be anything but i should access with that name only
        }
    }
    const handleSubmit=async(e)=>
    {
    e.preventDefault()
    const formData={
        name:name
    }
    validateErrors()
    if(Object.keys(errors).length===0)
    {
    try{
        const response=await axios.post('http://localhost:3050/api/categories',formData,{
        headers:{
            Authorization:localStorage.getItem('token')
        }
        })
        const res=response.data
        props.addCategory(res)
        setFormErrors({})
        setName('')
        }
        catch(err)
        {
            console.log(err.message)
        }
    }
    else{
        setFormErrors(errors)
    }
    
}
return(
    <div>
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Name: </label>
            <input
            type="text"
            value={name}
            id="name"
            onChange={(e)=>
            {
                setName(e.target.value)
            }}/>
            {formErrors.name &&<span>{formErrors.name}</span>}<br/>
            <input type="submit"/>
        </form>
    </div>
)
}
export default CategoriesForm