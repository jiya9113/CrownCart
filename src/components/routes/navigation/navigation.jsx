import { Outlet } from "react-router";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import './navigation.scss'

import { ReactComponent as Logo } from '../../../assets/crown.svg';

const Navigation = () => {
    return(
        <Fragment>
            <div className="navigation">
                <Link to='/' className="logo-container">
                    <Logo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='shop'>SHOP</Link>
                    <Link className='nav-link' to='sign-in'>SIGN-IN</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;