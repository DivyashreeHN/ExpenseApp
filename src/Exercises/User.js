import { useState } from 'react'
function RegisterForm()
{
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=()=>
    {
        const formData={
            username:name,
            password:password
        }
       console.log(formData)
    }
    return(
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter UserName</label><br/>
                <input type="text"
                 value={name}
                 onChange={(e)=>
                 {
                    setName(e.target.value)
                 }}></input><br/>
                <label>Enter Password</label><br/>
                <input type="password" 
                value={password}
                onChange={(e)=>
                {
                    setPassword(e.target.value)
                }}></input><br/>
                <input type="submit"></input>
            </form>
        </div>
    )

}
export default RegisterForm