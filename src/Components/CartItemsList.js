import React from 'react';
import CartItem from './CartItem';
import '../Styles/CartItemsList.css';

class CartItemsList extends React.Component{

    render(){

        const { products, increaseQuantity, decreaseQuantity, deleteCartItem } = this.props;

        return(

            <div className="cart-item-screen">

                {/* now map over products array */}

                { 
                    products.map((product) => {

                        // we are receiving each individual product from product array

                        const { product_name, product_price, product_qty, product_img } = product;

                        return (

                            <CartItem

                                product_name={product_name}
                                product_price={product_price}
                                product_img={product_img}
                                product_qty={product_qty} 
                                increaseQuantity={() => increaseQuantity(product)}
                                decreaseQuantity={() => decreaseQuantity(product)}
                                deleteCartItem = {() => deleteCartItem(product)}
                                key={product.id}
                    
                            />
                        );
                    })
                }

            </div>
        );
    }
}

export default CartItemsList;