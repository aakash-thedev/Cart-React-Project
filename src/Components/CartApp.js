import React from 'react';
import Navbar from './Navbar';
import CartTotal from './CartTotal';
import CartItemsList from './CartItemsList';
import '../Styles/CartApp.css';
import AddNewProduct from './AddNewProduct';
import firebase from 'firebase';

class CartApp extends React.Component{

    // make an constructor inside which we have to make state
    constructor(){

        super();

        this.state = {
            // this state has list of products
            products: [],
            loading: true
        }
    }

    componentDidMount() {

        firebase
            .firestore()
            .collection('products')
            .onSnapshot((snapshot) => {

                // this snapshot.docs is collection of data
                // snapshot.docs.map((doc) => {
                //     console.log(doc.data());
                //     return;
                // });

                const products = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    data['id'] = doc.id;
                    return data;
                });

                this.setState({
                    products,
                    loading: false
                });
            });
    }

    // all other functions can reside here broo
    increaseQuantity = (product) => {

        const { products } = this.state;

        const index = products.indexOf(product);
        // we have to update qty of product at this index

        // products[index].product_qty += 1;

        // this.setState({
        //     products: products
        // });

        // ######## instead of finding product in state , find the product in db [ in componentDiMound we are setting id in data remember () --]
        const docRef = firebase.firestore().collection('products').doc(products[index].id);

        // now update this doc
        docRef.update({
            product_qty: products[index].product_qty + 1
        })
        .then(() => console.log("Updated Successfully"))
        .catch(err => console.log('ERRRRRRR',err));
    }

    decreaseQuantity = (product) => {

        const { products } = this.state;

        let index = products.indexOf(product);
        
        if(products[index].product_qty === 0){
            return;
        }

        // products[index].product_qty -= 1;

        // this.setState({
        //     products: products
        // });

        // ######## instead of finding product in state , find the product in db [ in componentDiMound we are setting id in data remember () --]
        const docRef = firebase.firestore().collection('products').doc(products[index].id);

        // now update this doc
        docRef.update({
            product_qty: products[index].product_qty - 1
        })
        .then(() => console.log("Updated Successfully"))
        .catch(err => console.log('ERRRRRRR',err));
    }

    // ------------------------------ delete the selected cart item ----------------------- //
    deleteCartItem = (product) => {

        const { products } = this.state;
        const indexOfArgProduct = products.indexOf(product);

        // delete this product from product array
        // products.splice(indexOfArgProduct, 1);

        // this.setState({
        //     products: products
        // });

        const docRef = firebase.firestore().collection('products').doc(products[indexOfArgProduct].id);
        docRef.delete();
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

    // ----------------------- add a new product to database --------------- //

    addProduct = (name, price, qty, img) => {

        // add the details to firebase
        firebase
            .firestore()
            .collection('products')
            .add({
                product_name: name,
                product_price: parseInt(price),
                product_qty: parseInt(qty),
                product_img: img
            })
            .then((docRef) => {
                console.log("New Product has been added ", docRef);
            })
            .catch((err) => {
                console.log("Error creating product ", err);
            });
    }


    // then finally
    render(){

        const { products, loading } = this.state;

        return(

            <main id="app-root">

                <AddNewProduct addProduct = {this.addProduct} />

                <div className="container">

                    {loading && <h1>Loading Products...</h1>}

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
            </main>
        );
    }
}

export default CartApp;