import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdStars } from "react-icons/md";
import Card from "./Card";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";

const Restaurant = () => {
    let { id } = useParams();
    const [resData, setResData] = useState([]);
    const [menuList, setMenuList] = useState([]);
    useEffect(() => {
        getMenuData();
    }, []);

    async function getMenuData() {
        const list = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.1919738&lng=76.6190774&restaurantId=${id}`);
        const data = await list.json();
        setResData(data.data.cards);
        setMenuList(data.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    return (!resData.length || !menuList.length) ? <Shimmer /> : (
        <>
            <div>
                <h1 className="text-3xl">{resData[0].card.card.text}</h1>
                <div className="flex p-10 justify-between ">
                    <div key="section1" className="">
                        <div className="flex items-center">
                            <MdStars />
                            {resData[2].card.card.info.avgRatingString} ({resData[2].card.card.info.totalRatingsString})
                        </div>
                        <h1>{resData[2].card.card.info.cuisines.join(", ")}</h1>
                        <h3>Address: {resData[2].card.card.info.areaName}</h3>
                    </div>

                    <div key="section2" className="w-1/2 flex-col items-center justify-evenly gap-2">
                        {menuList.map((item) => <MenuCard key={item.id} item={item.card.info} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurant;