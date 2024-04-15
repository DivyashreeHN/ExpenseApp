export default function InterviewUsersList(props)
{
    return(
        <div>
            <h1>List of Users-{props.users.length}</h1>
            <ul>
                {
                    props.users.map((user)=>
                    {
                        return <li key={user.id}>{user.name} email:{user.email}</li>
                    })
                   
                }
            </ul>
        </div>
    )
}