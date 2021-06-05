import '../Styles/CartItem.css';

const CartItem = (props) => {
    // instead of writing this.state again and again
    const {product_name, product_img, product_price, product_qty, increaseQuantity, decreaseQuantity, deleteCartItem} = props;

    return(

        <div className="cart-item-wrapper">

            <div className="cart-item-picture">
                <img src={product_img} alt="product"></img>
            </div>

            <div className="details-section">

                <span className="cart-item-name">{product_name}</span>
                <span className="cart-item-price">$ {product_price}</span>
                <i className="fas icon fa-trash" onClick={deleteCartItem}></i>

            </div>

            <div className="qty-handler-section">

                <span className="utilities">
                    <i className="fas icon fa-plus-circle" onClick={increaseQuantity}></i>
                    <span className="qty-wrapper"><span className="qty">{product_qty}</span></span>
                    <i className="fas icon fa-minus-circle" onClick={decreaseQuantity}></i>
                </span>

            </div>
        </div>
    );
}

export default CartItem;
