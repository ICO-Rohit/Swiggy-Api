import { IMG_URI } from "./Constant";
import UserContext from "./utils/UserContext";

const Card = ({ cloudinaryImageId, name, avgRating, cuisines, locality }) => {
    return (
        <>
            <div className="m-5 border-solid border-2 border-sky-400 w-80 rounded-3xl overflow-hidden">
                <div className="w-full h-60 overflow-hidden">
                    <img src={IMG_URI + cloudinaryImageId} alt="" className="w-full" />
                </div>
                <div className="p-5">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <h2 className="text-lg font-bold">{avgRating}</h2>
                     <h3 className="text-base font-semibold">{cuisines.join(", ")}</h3>
                    <h3 className="text-base font-semibold">{locality}</h3>
                </div>
            </div>
        </>
    )
}

export default Card;