import '../Styles/CartTotal.css';

const CartTotal = (props) => {

    const { totalPrice } = props;

    return (
        <div className="cart-total">
            <span className="total-price-wrapper">
                <span className="price-heading">Your cart total : </span>
                <span className="total-price">$ {totalPrice}</span>
            </span>
        </div>
    );
}

export default CartTotal;