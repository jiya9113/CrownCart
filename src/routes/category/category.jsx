import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router';

import { CategoriesContext } from '../../components/contexts/categories-context';
import ProductCard from '../../components/product-card/product-card';

import { CategoryContainer, CategoryTitle } from './category.styles.jsx';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products,setProducts] = useState(categoriesMap[category]);
    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {
                    products && products.map((product)=>{
                        return (
                            <ProductCard product={product} key={product.id}/>
                        )
                    })
                }
            </CategoryContainer>
        </Fragment>
    )
}

export default Category;