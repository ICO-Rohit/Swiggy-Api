import { IMG_URI } from "./Constant"
import { addItem } from "./utils/CartSlice";
import { useDispatch } from "react-redux";

const MenuCard = ({item}) => {
    const name = item.name;
    const description = item.description;
    const price = item.price;
    const imageId = item.imageId;

    const dispatch = useDispatch();
    function handleDispatch() {
        dispatch(addItem(item));
    }

    return (
        <div key={imageId} className="w-full p-5">
            <div className="w-full flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <h2>{description}</h2>
                    <h2>₹{price / 100}</h2>
                    <button className="bg-green-100 p-1 m-2" onClick={() => handleDispatch(item)}>Add Item</button>
                </div>
                <img src={`${IMG_URI}/${imageId}`} alt="item_image" className="w-48 h-48 rounded-md" />
            </div>
        </div>
    )
}

export default MenuCard
