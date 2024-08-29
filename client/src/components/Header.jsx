import { Link } from "react-router-dom";
import { Logo } from "./Constant";
import About from "./About";
import {useSelector} from "react-redux";
import store from "./utils/CreateStore";

const Header = () => {
    const cartItems = useSelector(store => store.cart.items);
    return (
        <>
            <div className="w-auto flex justify-between items-center px-10 border-solid border-black border-2 m-2">
                <div className="w-32">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                </div>
                <div className="flex gap-4 items-center">
                    <ul className="flex gap-4">
                        <Link to="/offer"><li>Offers</li></Link>
                        <Link to="/cart"><li>Cart - {cartItems.length}</li></Link>
                    </ul>
                    <button className="bg-gray-300 p-2 rounded-md">LogIn</button>
                </div>
            </div>
        </>
    )
}

export default Header;