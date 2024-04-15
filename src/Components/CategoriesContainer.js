import CategoriesList from './CategoriesList.js'
import CategoriesForm from './CategoriesForm.js'
function CategoriesContainer(props)
{
    return(
        <div>

            
            <h1>Listing Categories-{props.categories.length}</h1>
            {props.categories.length===0 ?<p>Category is empty add new category</p>
            :(
                
            <CategoriesList categories={props.categories} removeCategory={props.removeCategory}/>
            )}
            <CategoriesForm addCategory={props.addCategory}/>
        </div>
    )
}
export default CategoriesContainer