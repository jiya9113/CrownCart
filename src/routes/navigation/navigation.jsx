import { Outlet } from "react-router";
import { Fragment, useContext } from "react";

import { UserContext } from "../../components/contexts/user-context";
import { CartContext } from "../../components/contexts/cart-context";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import { SignOutUser } from '../../utils/firebase/firebase'

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await SignOutUser();
    }
    
    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='shop'>SHOP</NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutHandler}>SIGN-OUT</NavLink>
                        ) : (
                            <NavLink to='authentication'>SIGN-IN</NavLink>
                        )
                    }
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;