import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../components/contexts/categories-context";

import CategoryPreview from '../../components/category-preview/category-preview';

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title)=>{
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview title={title} products={products} key={title}/>
                    )
                })
            }
        </Fragment>
    )
}

export default CategoriesPreview;