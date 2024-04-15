import axios from "axios"
import { useState } from "react"
export default function TaskForm(props)
{
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[status,setStatus]=useState('Pending')
    const[priority,setPriority]=useState('Low')
    const[submit,isSubmit]=useState(false)

    const handleSubmit=(e)=>
    {
        e.preventDefault()
        const formData={
            title:title,
            description:description,
            status:status,
            priority:priority
        }
        isSubmit(!submit)
        axios.post('http://localhost:3090/api/tasks/',formData)
        .then((response)=>
        {
            const res=response.data
            props.addTasks(res)
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
    
    return(
        <div>
            
            <h1>Add Task</h1>
            <form onSubmit={handleSubmit} className="my-form">

            <div className="form-group">
            <label>enter the title</label>
            <input
            type="text"
            value={title}
            onChange={(e)=>
            {
                setTitle(e.target.value)
            }}/></div><br/>

            <div className="form-group">
            <label>description</label>
            <textarea
            type="text"
            value={description}
            onChange={(e)=>
            {
                setDescription(e.target.value)
            }}></textarea></div><br/>
            
            <div className="form-group  ">
            <label>status</label>
            <label>
            <input
            type="radio"
            name="status"
            value="Pending"
            checked={status === 'Pending'}
            onChange={(e)=>
                {
                    setStatus(e.target.value)
                }}/>Pending</label>

            <label>
            <input
            type="radio"
            name="status"
            value="InProgress"
            checked={status === 'InProgress'}
            onChange={(e)=>
                {
                    setStatus(e.target.value)
                }}/>InProgress</label>

            <label>
            <input
            type="radio"
            name="status"
            value="Completed"
            checked={status === 'Completed'}
            onChange={(e)=>
                {
                    setStatus(e.target.value)
                }}/>Completed</label></div><br/>

            <div class="form-group">
            <label>Priority</label>
            <label><input
            type="radio"
            name="priority"
            value="Low"
            checked={priority === 'Low'}
            onChange={(e)=>
                {
                    setPriority(e.target.value)
                }}/>Low</label>

            <label>
            <input
            type="radio"
            name="priority"
            value="Medium"
            checked={priority === 'Medium'}
            onChange={(e)=>
                {
                    setPriority(e.target.value)
                }}/>Medium</label>

            <label>
            <input
            type="radio"
            name="priority"
            value="High"
            checked={priority === 'High'}
            onChange={(e)=>
            {
                setPriority(e.target.value)
            }}/>High</label></div><br/>

            <input type="submit"/>
        </form>

        </div>
    )
}
