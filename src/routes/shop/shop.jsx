import { Route, Routes } from 'react-router';

import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';

import { ProductsContainer } from './shop.styles.jsx';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=':category' element={<Category/>}/>
        </Routes>
    )
}

export default Shop;