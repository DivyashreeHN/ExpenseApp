import CategoriesItem from "./CategoriesItem"
function CategoriesList(props)
{
    return(
        <div>
            <ul>
            {  
            props.categories.map((ele)=>
            {
                return <CategoriesItem
                removeCategory={props.removeCategory}
                key={ele._id}
                name={ele.name}
                id={ele._id}/>
            })
        }
            </ul>
        </div>
    )

}
export default CategoriesList
