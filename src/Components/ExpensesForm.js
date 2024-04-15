import axios from 'axios'
import {useState} from 'react'
import {isEmpty} from 'lodash'
const errorColor={
    color:'red'
}
export default function ExpensesForm(props)
{
    const[expenseDate,setExpenseDate]=useState('')
    const[amount,setAmount]=useState('')
    const[description,setDescription]=useState('')
    const[categoryId,setCategoryId]=useState('')
    const[formErrors,setFormErrors]=useState({})
    const errors={}
    

    const validateErrors=()=>
    {
        if(expenseDate.trim().length===0)
        {
            errors.expenseDate='Date is required'
        }
        else if(new Date(expenseDate)>new Date())
        {
            errors.expenseDate='Date cannot be greater than today\'s date'
        }
        if(amount.trim().length===0)
        {
            errors.amount='Amount is required'
        }
        if(description.trim().length===0)
        {
            errors.description='Description'
        }
        if(categoryId.trim().length===0)
        {
            errors.categoryId='Category id needed'
        }
    }

    const handleSubmit=async(e)=>
    {
        //es6 concise property

        e.preventDefault()
        const formData={
            expenseDate: expenseDate,
            amount:amount,
            description:description,
            categoryId:categoryId
        }
        validateErrors()
        if(isEmpty(errors))
        {
        try{
        const response=await axios.post('http://localhost:3050/api/expenses',formData,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
            const res=response.data
            props.addExpense(res)
            setFormErrors({})
            setExpenseDate('')
            setAmount('')
            setDescription('')
            setCategoryId('')
        }
        catch(err)
        {
            console.log(err)
        }
    } else{
        setFormErrors(errors)
    }
}
    return(
        <div>
            <h1>Add Expense</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor='expenseDate'>date: </label>
            <input
            type='date' 
            value={expenseDate} 
            id="expenseDate" 
            onChange={(e)=>
            {
                setExpenseDate(e.target.value)
            }} />
            {formErrors.expenseDate && <span style={errorColor}>{formErrors.expenseDate}</span>}<br/><br/>

            <label htmlFor='amount'>amount: </label>
            <input 
            type='number' 
            value={amount} 
            id="amount" min={1} 
            onChange={(e)=>
            {
                setAmount(e.target.value)
            }}/>
            {formErrors.amount && <span style={errorColor}>{formErrors.amount}</span>}<br/><br/>
    

            <label htmlFor='description'>description: </label>
            <textarea 
            value={description} 
            id="description" 
            onChange={(e)=>
            {
                setDescription(e.target.value)
            }}/>
            {formErrors.description && <span style={errorColor}>{formErrors.description}</span>}<br/><br/>


            <label htmlFor='categoryId'>Category: </label>
           <select 
           value={categoryId} 
           id="categoryId" 
           onChange={(e)=>
           {
            setCategoryId(e.target.value)

           }}>
        
            <option value=" ">select Category</option>
            {props.categories.map((cat)=>
            {
                return <option key={cat._id} value={cat._id} >
                    {cat.name}
                </option>
            })}
            </select>
            {formErrors.categoryId && <span style={errorColor}>{formErrors.categoryId}</span>}<br/><br/>
           <input type="submit"/>
</form>
     </div>
    )

}