import '../Styles/Navbar.css';
import cartIcon from '../Styles/icons8-shopping-cart-48.png';

// ------------ all those components which dont have any state must be a functional component --------------- //

const Navbar = (props) => {

    const { count, displaySearchedItems } = props;

    return(

        <nav className="navbar">

            <span className="logo-section">
                <img src="https://www.nicepng.com/png/detail/202-2022682_online-shopping-logo-png.png" alt="logo" />
            </span>

            <section className="cart-and-search">

                <input className="search-cart-item" placeholder="Search in your cart..." onChange={(event) => displaySearchedItems(event.target.value)}></input>
                <span className="side-logo-wrapper">
                <img src={cartIcon} alt="shopping-cart" />
                <span className="total-item"> {count} </span>
                </span>

            </section>

        </nav>
    );
}

export default Navbar;