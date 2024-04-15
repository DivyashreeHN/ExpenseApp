import axios from 'axios'
function CategoriesItem(props)
{
    const handleRemove=async()=>
    {

    const confirmation= window.confirm(`Are you sure you want to delete ${props.name}`)
    if(confirmation)
    {
        try{
        const response=await axios.delete(`http://localhost:3050/api/categories/${props.id}`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
            const res=response.data
            props.removeCategory(res._id)
        }
        catch(err)
        {
            console.log(err.message)
        }
    }
}
    return<li>{props.name} <button onClick={handleRemove}>remove</button></li>
    
}
export default CategoriesItem