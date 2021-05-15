import React from 'react';
import '../Styles/CartTotal.css';

class CartTotal extends React.Component{

    render() {

        return (
            <div className="cart-total">
                <span className="total-price-wrapper">
                    <span className="price-heading">Your cart total : </span>
                    <span className="total-price">$ 9990</span>
                </span>
            </div>
        );
    }
}

export default CartTotal;