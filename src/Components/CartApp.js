import React from 'react';
import Navbar from './Navbar';
import CartTotal from './CartTotal';
import CartItemsList from './CartItemsList';
import '../Styles/CartApp.css';

class CartApp extends React.Component{

    // make an constructor inside which we have to make state
    constructor(){

        super();

        this.state = {
            // this state has list of products
            products: [
                {
                    product_name: 'Boat Headphone',
                    product_price: 99,
                    product_qty: 2,
                    product_img: 'https://pcbonlineshop.com/photos/product/4/176/4.jpg',
                    id: 1
                },

                {
                    product_name: 'Acer Laptop',
                    product_price: 999,
                    product_qty: 1,
                    product_img: 'https://static.acer.com/up/Resource/Acer/Laptops/acer-chromebook-spin-511/image/20210120/Chromebook-Spin-511-R753T-Bk-modelmain.png',
                    id: 2
                },

                {
                    product_name: 'Jacket (Lewis)',
                    product_price: 199,
                    product_qty: 3,
                    product_img: 'https://5.imimg.com/data5/EH/YQ/MY-39127286/mens-cotton-jacket-500x500.jpg',
                    id: 3
                },

                {
                    product_name: 'Sneakers',
                    product_price: 149,
                    product_qty: 1,
                    product_img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sneaker-index-1587142381.jpg?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*',
                    id: 4
                },

                {
                    product_name: 'Watch',
                    product_price: 99,
                    product_qty: 1,
                    product_img: 'https://image01.oneplus.net/ebp/202103/12/1-m00-21-ed-rb8bwmbk1wgadz8_aai9rijgk7q405.png',
                    id: 5
                },

                {
                    product_name: 'One Plus Nord',
                    product_price: 999,
                    product_qty: 1,
                    product_img: 'https://www.gizmochina.com/wp-content/uploads/2020/10/OnePlus-Nord-N100-1.jpg',
                    id: 6
                },

                {
                    product_name: 'Bench Press',
                    product_price: 499,
                    product_qty: 1,
                    product_img: 'https://images-na.ssl-images-amazon.com/images/I/81M2AvweC3L._AC_SX425_.jpg',
                    id: 7
                },

                {
                    product_name: 'T-Shirt',
                    product_price: 49,
                    product_qty: 5,
                    product_img: 'https://images-na.ssl-images-amazon.com/images/I/610irNyucGL._UL1500_.jpg',
                    id: 8
                },

                {
                    product_name: 'Playstation 5',
                    product_price:9999,
                    product_qty: 1,
                    product_img: 'https://en.letsgodigital.org/uploads/2020/07/sony-playstation-5-black-version.jpg',
                    id: 9
                }
            ]
        }
    }

    // all other functions can reside here broo
    increaseQuantity = (product) => {

        const { products } = this.state;

        const index = products.indexOf(product);
        // we have to update qty of product at this index

        products[index].product_qty += 1;

        this.setState({
            products: products
        });
    }

    decreaseQuantity = (product) => {

        const { products } = this.state;

        let index = products.indexOf(product);
        
        if(products[index].product_qty === 0){
            return;
        }

        products[index].product_qty -= 1;

        this.setState({
            products: products
        });
    }

    // ------------------------------ delete the selected cart item ----------------------- //
    deleteCartItem = (product) => {

        const { products } = this.state;
        const indexOfArgProduct = products.indexOf(product);

        // delete this product from product array
        products.splice(indexOfArgProduct, 1);

        this.setState({
            products: products
        });
    }

    // ------------------------------ get the cartCount -----------------------------------//
    getCartCount = () => {

        let count = 0;
        const { products } = this.state;

        products.forEach((product) => {
            count += product.product_qty;
        });

        return count;
    }

    // ------------------------------ get the totalPrice -----------------------------------//
    getTotalPrice = () => {

        let totalPrice = 0;
        const { products } = this.state;

        products.forEach((product) => {
            totalPrice += (product.product_price * product.product_qty);
        });

        return totalPrice;
    }

    // ----------------------- display searched items ------------------- //

    displaySearchedItems = (itemName) => {
        console.log(itemName);
    }


    // then finally
    render(){

        const { products } = this.state;

        return(

            <div className="container">

                <Navbar count = {this.getCartCount()}
                        displaySearchedItems = {this.displaySearchedItems}
                />

                <CartItemsList products = {products}
                                increaseQuantity = {this.increaseQuantity}
                                decreaseQuantity = {this.decreaseQuantity}
                                deleteCartItem = {this.deleteCartItem}
                />

                <CartTotal totalPrice = {this.getTotalPrice()}/>

            </div>
        );
    }
}

export default CartApp;