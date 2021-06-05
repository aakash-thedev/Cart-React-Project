import React, {useRef} from 'react';
import '../Styles/AddNewProduct.css';

export default function AddNewProduct(props) {

    var nameRef = useRef();
    var priceRef = useRef();
    var qtyRef = useRef();
    var imgRef = useRef();

    const {addProduct} = props;

    function addProductUtil() {
        
        addProduct(nameRef.current.value, parseInt(priceRef.current.value), parseInt(qtyRef.current.value), imgRef.current.value);

        // clean up everything

        document.getElementById('name').value = "";
        document.getElementById('price').value = "";
        document.getElementById('qty').value = "";
        document.getElementById('img').value = "";
    }

    return (

        <div id="input-container">

            <h1>Add Products To Cart</h1>

            <input type="text" placeholder="Product Name" ref={nameRef} required id="name" />
            <input type="number" placeholder="Product Price" ref={priceRef} required id="price" />
            <input type="number" placeholder="Product Quantity" ref={qtyRef} required id="qty" />
            <input type="text" placeholder="Product Image URL" ref={imgRef} required id="img" />
            <button onClick={addProductUtil}> Add Product </button>

        </div>
    )
}
