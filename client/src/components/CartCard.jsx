import { IMG_URI } from "./Constant";
import { clearItem } from "./utils/CartSlice";
import { useDispatch } from "react-redux";

const CartCard = ({ id, name, price, imageId }) => {
    const dispatch = useDispatch();
    return <>
        <div className="flex">
            <img src={IMG_URI + imageId} alt="" className="w-48 h-48 rounded-md" />
            <div className="ml-2">
                <h1>{name}</h1>
                <h2>{price / 100}</h2>
                <button className="bg-red-600 p-1 rounded-lg" onClick={() => dispatch(clearItem(id))}>Remove</button>
            </div>
        </div>
    </>
}

export default CartCard;