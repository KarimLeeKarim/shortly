import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
const Navbar = ({ signForm, loginForm,opclMobile }) => {
    return (
        <section className="container">
            <div className="navbar" >
                <div className="navbar__menu">
                    <span className="menu__word">Shortly</span>
                    <li className="menu__li">Features</li>
                    <li className="menu__li">Pricing</li>
                    <li className="menu__li">Resources</li>
                </div>
                <div className="navbar__button">
                    <button onClick={loginForm} className="button__login">Login</button>
                    <button onClick={signForm} className="button__sign">Sign Up</button>
                </div>
                <MenuIcon onClick={opclMobile} className="button__X"/>
                {/* <button onClick={opclMobile} className="button__X">X</button> */}
            </div>
        </section>
    )
}
export default Navbar;


