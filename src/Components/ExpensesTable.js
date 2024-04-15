import ExpensesItem from "./ExpensesItem"
export default function ExpensesTable(props)
{
    
    return(
        
            <table border="6">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>amount</th>
                        <th>description</th>
                        <th>Category</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            props.expense.map((cat)=>
                            {
                                return(
                                <ExpensesItem 
                                key={cat._id}
                                expense={cat}
                                categories={props.categories}
                                removeExpense={props.removeExpense}
                                />
                                )
                            })
                        }
                    
                    
                </tbody>
            </table>
        
    )
}