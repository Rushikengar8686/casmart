import React from 'react';
import logo from "../Components/Assets/logo.svg"
import { FaSearch, FaSignInAlt, FaShoppingCart, FaHeart } from 'react-icons/fa';


const Header = () => {
   
    return (
        <div>
            <header className="header" data-header>
                <div className="container">

                    <div className="overlay" data-overlay></div>

                    <div className="header-search">
                        <input type="search" name="search" placeholder="Search Product..." className="input-field"/>

                            <button className="search-btn" aria-label="Search">
                                <FaSearch name="search-outline"></FaSearch>
                            </button>
                    </div>

                    <a href="#" className="logo">
                        <img src={logo} alt="Casmart logo" width="130" height="31"/>
                    </a>

                    <div className="header-actions">

                        <button className="header-action-btn">
                            {/* <ion-icon name="person-outline" aria-hidden="true"></ion-icon> */}
                            <FaSignInAlt></FaSignInAlt>
                            <p className="header-action-label">Sign in</p>
                        </button>

                        <button className="header-action-btn">
                            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                          
                            <p className="header-action-label">Search</p>
                        </button>

                        <button className="header-action-btn">
                            {/* <ion-icon name="cart-outline" aria-hidden="true"></ion-icon> */}
                              <FaShoppingCart></FaShoppingCart>

                            <p className="header-action-label">Cart</p>

                            <div className="btn-badge green" aria-hidden="true">3</div>
                        </button>

                        <button className="header-action-btn">
                            {/* <ion-icon name="heart-outline" aria-hidden="true"></ion-icon> */}
                            <FaHeart></FaHeart>

                            <p className="header-action-label">Wishlisht</p>

                            <div className="btn-badge" aria-hidden="true">2</div>
                        </button>

                    </div>

                    <button className="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className="navbar" data-navbar>

                        <div className="navbar-top">

                            <a href="#" className="logo">
                                <img src="./assets/images/logo.svg" alt="Casmart logo" width="130" height="31"/>
                            </a>

                            <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
                                <ion-icon name="close-outline"></ion-icon>
                            </button>

                        </div>

                        <ul className="navbar-list">

                            <li>
                                <a href="#home" className="navbar-link">Home</a>
                            </li>

                            <li>
                                <a href="#" className="navbar-link">Shop</a>
                            </li>

                            <li>
                                <a href="#" className="navbar-link">About</a>
                            </li>

                            <li>
                                <a href="#blog" className="navbar-link">Blog</a>
                            </li>

                            <li>
                                <a href="#" className="navbar-link">Contact</a>
                            </li>

                        </ul>

                    </nav>

                </div>
            </header>


        </div>
    );
};

export default Header;