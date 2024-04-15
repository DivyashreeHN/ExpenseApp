import { useState } from 'react'
function ContactForm()
    {
        const[name,setName]=useState('')
        const[mobile,setMobile]=useState('')
        const[message,setMessage]=useState('')
        const[isSubmit,setIsSubmit]=useState(false)
        const handleSubmit=(e)=>
        {
            e.preventDefault()
            const formData={
                name:name,
                mobile:mobile,
                message:message
            }
            console.log(formData)
            setIsSubmit(true)
            }
        
        return(
            <div>
                {isSubmit?<p>Thank you {name} for submitting form, we will contact you shortly</p>:
                (
               <form onSubmit={handleSubmit}>
                <label>Enter Your Name</label><br/>
                <input 
                type="text" 
                value={name}
                onChange={(e)=>
                {
                    setName(e.target.value)
                }}/><br/>


                <label>Enter Your Mobile</label><br/>
                <input 
                type="text"
                value={mobile}
                onChange={(e)=>
                {
                    setMobile(e.target.value)
                }}/><br/>


                <label>Enter Message</label><br/>
                <textarea
                    value={message}
                    onChange={(e)=>
                    {
                        setMessage(e.target.value)
                    }}
                ></textarea><br/>
                <input type="submit"/>
               </form>
                )
    }
            </div>
        )

    }
export default ContactForm