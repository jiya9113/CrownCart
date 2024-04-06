import { CartItemContainer, ItemDetails, Image, Name } from './cart-item.styles.jsx';

const CartItem = ({ product }) => {
    console.log(product);
    const { name, quantity, price, imageUrl } = product;
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={name}/>
            <ItemDetails>
                <Name>{name}</Name>
                <span className='quantity'>{quantity} X ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
};

export default CartItem;