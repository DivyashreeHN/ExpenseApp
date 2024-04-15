import TaskItem from "./TaskItem"
export default function TaskList(props)
{
    return(
        <div>
            <ul>
                {
            
            props.tasks.map((ele)=>
            {
                return<TaskItem
                removeTask={props.removeTask}
                ele={ele}
                key={ele._id}
                title={ele.title}
                id={ele._id}/>
            })
        }
            </ul>
        </div>
    )
}