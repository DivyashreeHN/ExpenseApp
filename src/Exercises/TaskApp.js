import { useEffect, useState } from 'react'
import axios from 'axios'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
export default function TaskApp()
{
    const[tasks,setTasks]=useState([])
    const[view,setView]=useState('')
    useEffect(()=>
    {
        axios.get('http://localhost:3090/api/tasks')
        .then((response)=>
        {
            const newArray=response.data
            setTasks(newArray)
        })
        .catch((err)=>
        {
            console.log(err)
        })
    },[])
    

    const addTasks=(task)=>
    {
        setTasks([...tasks,task])
    }

    const removeTask=(id)=>
    {
        const newArray=tasks.filter((ele)=>
        {
            return ele._id!=id
        })
        setTasks(newArray)
    }

    

    return(
        <div>
        <h1>Task Management App</h1>
        <TaskList tasks={tasks} removeTask={removeTask} /> 
        <h2>Selected Task</h2>
        
        <TaskForm addTasks={addTasks} />
        
        </div>
    )
}