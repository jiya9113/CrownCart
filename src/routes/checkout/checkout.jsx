import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../components/contexts/cart-context";

import CheckoutItem from "../../components/checkout-item/checkout-item";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);


    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            <div>
                {   
                    cartItems.map((item)=>{
                        return (
                            <CheckoutItem cartItem={item} key={item.id}/>
                        )
                    })
                }
            </div>
            <Total>Total = ${cartTotal}</Total>
        </CheckoutContainer>
    )
};
export default Checkout;