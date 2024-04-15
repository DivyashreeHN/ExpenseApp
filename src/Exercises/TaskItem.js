import axios from "axios"
export default function TaskItem(props)
{
    const handleRemove=()=>
    {

    const confirmation= window.confirm(`Are you sure you want to delete ${props.title}`)
    if(confirmation)
    {
        axios.delete(`http://localhost:3090/api/tasks/${props.id}`)
        .then((response)=>
        {
            const res=response.data
            props.removeTask(res._id)
        })
        .catch((err)=>
        {
            console.log(err.message)
        })
    }
}

const viewTask = (obj)=>{
    axios.get(`http://localhost:3090/api/tasks/${obj._id}`)
    .then((response)=>{
        const result =response.data
        console.log(result)
        const detail=window.confirm(`Title-${result.title}, Description-${result.description}, Status-${result.status}, Priority-${result.priority}`)
     
    })
    .catch((err)=>{
       console.log(err)
    })
}


    return<li>{props.title} <button onClick={handleRemove}>remove</button>        <button 
     onClick={()=>{
                        viewTask(props.ele)
    
        
     }}>View  </button></li>
}