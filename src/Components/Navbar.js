import React from 'react';
import '../Styles/Navbar.css';

class Navbar extends React.Component{

    render(){

        return(
            <nav className="navbar">
                <span className="logo-section">
                    <img src="https://www.nicepng.com/png/detail/202-2022682_online-shopping-logo-png.png" alt="logo" />
                </span>
                <section className="cart-and-search">
                    <input className="search-cart-item" placeholder="Search in your cart..."></input>
                    <span className="side-logo-wrapper">
                    <img src="https://img-premium.flaticon.com/png/512/879/879815.png?token=exp=1621066913~hmac=73b257f5b610f5f5cf8346943623bc08" alt="shopping-cart" />
                    <span className="total-item">9</span>
                    </span>
                </section>
            </nav>
        );
    }
}

export default Navbar;