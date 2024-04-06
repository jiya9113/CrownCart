import { useContext } from 'react';

import { CartContext } from '../contexts/cart-context';

import { CheckoutItemContainer, ImageContainer, Name, Quantity, Price, Value, Arrow, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const {name, imageUrl, price, quantity} = cartItem;

    const { increaseItem, decreaseItem, removeItem } = useContext(CartContext)
    
const removeHandler = () =>{
    removeItem(cartItem);
}

const decHandler = () => {
    decreaseItem(cartItem);
}

const incHandler = () => {
    increaseItem(cartItem);
}

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={decHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={incHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={removeHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;