import { createContext, useState, useEffect } from "react";

const addCartItems = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id===productToAdd.id;
    });
    if(existingCartItem){
        return cartItems.map((cartItem)=>{
                return cartItem.id===productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem
            })
    }
    return [...cartItems, {...productToAdd, quantity:1}];
};


export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems : [],
    addItemsToCart : () => {},
    cartCount : 0,
    cartTotal : 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((count,cartItem)=>{
            return count + cartItem.quantity;
        },0);
        setCartCount(newCartCount);
    },[cartItems]);

    useEffect(()=>{
        const newTotal = cartItems.reduce((total,cartItem)=>{
            return total + cartItem.price*cartItem.quantity;
        },0);
        setCartTotal(newTotal);
    },[cartItems]);

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd));
    }

    const increaseItem = (item) => {
        const updatedCartItems = cartItems.map((cartItem)=>{
            return cartItem.id===item.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem;
        })

        setCartItems(updatedCartItems);
    }

    const decreaseItem = (item) => {
        const existingCartItem = cartItems.find((cartItem) => {
            return cartItem.id===item.id;
        });
        console.log(existingCartItem);
        let updatedCartItems=[];
        if(existingCartItem.quantity==1){
            updatedCartItems = cartItems.filter((cartItem)=>{
                return cartItem.id !== item.id;
            })
        }
        else{
            updatedCartItems = cartItems.map((cartItem)=>{
                return cartItem.id===item.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem;
            })
        }

        setCartItems(updatedCartItems);
    }

    const removeItem = (item) => {
        const updatedCartItems = cartItems.filter((cartItem)=>{
            return cartItem.id !== item.id;
        })

        setCartItems(updatedCartItems);
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemsToCart, cartCount, increaseItem, decreaseItem, removeItem, cartTotal};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};