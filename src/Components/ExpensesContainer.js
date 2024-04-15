import { useState } from "react"
import ExpensesForm from "./ExpensesForm";
import ExpensesTable from "./ExpensesTable";

export default function ExpensesContainer(props)
{
    const[search,setSearch]=useState('')


   

    const filterExpense=()=>
    {
        return props.expense.filter((ele)=>
        {
            return ele.description.toLowerCase().includes(search.toLowerCase())
        })
    }

    const calcTotal=filterExpense().reduce((acc,cv)=>
    {
        return acc+cv.amount
    },0)

  
   return(
    <div>
<h2>Listing Expenses-{filterExpense().length}</h2>
<input type="text" placeholder="Search ....." value={search} onChange={(e)=>
{
    setSearch(e.target.value)
}}/><br/>

<ExpensesTable expense={filterExpense()} categories={props.categories} removeExpense={props.removeExpense} />

<h3>Total Expenses-{calcTotal}</h3>
<ExpensesForm addExpense={props.addExpense} categories={props.categories}/>


    </div>
   )
}