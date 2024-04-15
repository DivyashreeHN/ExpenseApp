import axios from "axios"
export default function ExpensesItem(props)
{
    const getCategoryName=(id)=>
    {
        const category=props.categories.find(ele=>ele._id===id) 
        if(category)
        {
            return category.name
        }
        else{
            return '-'
        }
    }
    const handleRemove=async()=>
    {
        const confirmation=window.confirm('are you sure')
        if(confirmation)
        {
            try{
            const response=await axios.delete(`http://localhost:3050/api/expenses/${props.expense._id}`,{
                headers:{
                    Authorization:localStorage.getItem('token')
                }
            })
            
                const res=response.data
                 props.removeExpense(res._id)
            }
            catch(err)
            {
                console.log(err)
            }
        }
    }
    return(   
        <tr>
        <td>{props.expense.expenseDate}</td>
        <td>{props.expense.amount}</td>
        <td>{props.expense.description}</td>
        <td>{getCategoryName(props.expense.categoryId)}</td>
        <td><button onClick={handleRemove}>remove</button></td> 
        </tr>
        )
}