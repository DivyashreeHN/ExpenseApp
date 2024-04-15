import axios from 'axios'
import {useState} from 'react'
export default function LoginForm(props)
{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[serverErrors,setServerErrors]=useState('')
    const[formErrors,setFormErrors]=useState({})
    const errors={}
    const validateErrors=()=>
    {
        if(email.trim().length===0)
        {
            errors.email='email is required' //here name is a property name it could be anything but i should access with that name only
        }
        if(password.trim().length===0)
        {
            errors.password='password is required' //here name is a property name it could be anything but i should access with that name only
        }
    }
    const handleSubmit=async(e)=>
    {
        e.preventDefault()
        const formData={
            email:email,
            password:password
        }
    validateErrors()
    if(Object.keys(errors).length===0)
    {
    try
    {
        const response=await axios.post('http://localhost:3050/api/users/login', formData)     
        const token = response.data.token  
        localStorage.setItem('token', token)                 
        alert('successfully logged in')                 
        props.loginSuccess()   
        setFormErrors({})
        setEmail('')
        setPassword('')

    }             
    catch(err) 
    {                
        setServerErrors(err.response.data.notice)
    }
} 
    else
    {
        setFormErrors(errors)
    }
    }
    return(
        <div>
            <h2>login</h2>
            {serverErrors && <p style={{color:'red'}}>
            {serverErrors}</p>}
            <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Enter Email</label><br/>
            <input type="text"
             value={email}
             onChange={(e)=>
            {
                setEmail(e.target.value)
            }} 
            id="email"
            name='email'/>
             {formErrors.email &&<span>{formErrors.email}</span>}<br/>

            <label htmlFor="password">Enter Password</label><br/>
            <input type="password"
             value={password}
             onChange={(e)=>
            {
                setPassword(e.target.value)
            }} 
            id="password"
            name="password"/>
             {formErrors.password &&<span>{formErrors.password}</span>}<br/>
            <input type="submit" value="login"/>
            </form>
        </div>
    )
}