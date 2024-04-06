import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/cart-context";
import Button from "../button/button"
import CartItem from "../cart-item/cart-item";

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);

    const goToCheckout = () =>{
        navigate("/checkout");
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((product) => {
                        return(
                            <CartItem product={product} key={product.id}/>
                        )
                    })) : (<EmptyMessage>Your Cart is Empty</EmptyMessage>)
                }
            </CartItems>
            <Button onClick={goToCheckout}>Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;