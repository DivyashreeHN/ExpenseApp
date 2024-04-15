import { useState,useEffect } from 'react'
import axios from 'axios'
import InterviewUsersList from './InterviewUsersList'
function InterviewTaskApp()
{
    const[users,setUsers]=useState([])
    useEffect(()=>
    {
        axios.get('http://jsonplaceholder.typicode.com/users/')
        .then((response)=>
        {
            const res=response.data
            setUsers(res)
        })
        .catch((err)=>
        {
            console.log(err)
        })

    },[])
    return(
<div>
    <InterviewUsersList users={users}/>
    </div>
    )
}
export default InterviewTaskApp
