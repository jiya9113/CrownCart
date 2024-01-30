import CategoryItem from "../category-item/category-item"

import './categories.scss'

const Categories = ({categories}) => {
    return(
        <div className='categories-container'>
        {
            categories.map((category)=>{
            return(
                <CategoryItem category={category} key={category.id}/>
            )
            })
        }
        </div>
    )
}

export default Categories