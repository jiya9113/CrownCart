import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card";

import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles';

const CategoryPreview = ({title, products}) => {
    console.log(products);
    return (
        <CategoryPreviewContainer>
            <h2>
                <Link to={title}><Title>{title.toUpperCase()}</Title></Link>
            </h2>
            <Preview>
                {
                    products.filter((_,idx)=>{
                        return idx<4;
                    })
                    .map((product)=>{
                        return <ProductCard product={product} key={product.id}/>
                    })
                }
            </Preview>
        </CategoryPreviewContainer>
    )
};

export default CategoryPreview;