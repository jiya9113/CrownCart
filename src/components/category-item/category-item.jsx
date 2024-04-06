import { useNavigate } from'react-router-dom';
import { BackgroundImage, CategoryBodyContainer, CategoryItemContainer } from './category-item.styles.jsx';

const CategoryItem = ({category}) =>{
    const {title,imageUrl,route}=category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);
    return(
        <CategoryItemContainer onClick={onNavigateHandler}>
            {/* <BackgroundImage style={{
            backgroundImage: `url(${imageUrl})`
            }}/> */}
            <BackgroundImage imageurl={imageUrl} />
            <CategoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBodyContainer>
        </CategoryItemContainer>
    )
}

export default CategoryItem