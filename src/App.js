// import Categories from './Categories'
// import ContactForm from './Exercises/Contact'
// import RegisterForm from './Exercises/User'
// import TaskManagement from "./TaskManagement"

import {useState,useEffect} from "react"
import axios from "axios"
import CategoriesContainer from "./Components/CategoriesContainer"
import ExpensesContainer from "./Components/ExpensesContainer"
import LoginForm from "./Components/LoginForm"
function App()
{
    const[userLoggedIn,setUserLoggedIn]=useState(false)
    const[categories,setCategories]=useState([])
    const[expense,setExpense]=useState([])
    useEffect(()=>
    {
        if(userLoggedIn)
        {
            //iife
            (async function(){
            try{
            const categoryResponse=await axios.get('http://localhost:3050/api/categories',{
            headers:
            {
                Authorization:localStorage.getItem('token')
            }
            })
                setCategories(categoryResponse.data)
     
            const expenseResponse=await axios.get('http://localhost:3050/api/expenses',{
            headers:
            {
                Authorization:localStorage.getItem('token')
            }
            })
            setExpense(expenseResponse.data)
        }
        catch(err)
        {
            console.log(err.message)
        } 
    })()
    }

    else
    {
        setCategories([])
        setExpense([])
    }
    },[userLoggedIn])

    useEffect(()=>
    {
        if(localStorage.getItem('token'))
        {
        setUserLoggedIn(true)
        }
    },[])

    const addCategory=(cat)=>
    {
        setCategories([...categories,cat])
    }

    const removeCategory=(id)=>
    {
        const res=categories.filter((ele)=>
        {
            return ele._id!==id
        })
        setCategories(res)
    }

    //EXPENSES

    const addExpense=(res)=>
    {
        setExpense([...expense,res])
    }

    const removeExpense=(id)=>
    {
        const res=expense.filter((ele)=>
        {
            return ele._id!==id
        })
        setExpense(res)
    }

    const loginSuccess=()=>
    {
        setUserLoggedIn(true)
    }
    
    const logoutUser=()=>
    {
        setUserLoggedIn(false)
        localStorage.removeItem('token')
    }

    return(
        <div>
             {/* <Categories/>   */}
             {/* <ContactForm/>  */}
             {/* <RegisterForm/>  */}
             {/* <TaskManagement/>   */}
              
               <h1>Expense App</h1>
               {userLoggedIn ? (
                <div>
                    <button onClick={logoutUser}>Logout</button>
                    <CategoriesContainer 
                    categories={categories} 
                    addCategory={addCategory} 
                    removeCategory={removeCategory}/>

                    <ExpensesContainer 
                    expense={expense} 
                    addExpense={addExpense} 
                    categories={categories} 
                    removeExpense={removeExpense} />
             
                </div>
               ):(
               <div>
                <LoginForm loginSuccess={loginSuccess}/>
               </div>
               )}
          </div>   
    )
}
export default App