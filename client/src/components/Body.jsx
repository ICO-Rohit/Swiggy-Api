import { useEffect, useState } from "react"
import Card from "./Card"
import Shimmer from "./Shimmer";
import { Swiggy_Api } from "./Constant";
import { Link } from "react-router-dom";

const Body = () => {
    const [search, setSearch] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantList, setRestaurantList] = useState(restaurants);
    const permanentRestaurantList = restaurants;

    useEffect(() => {
        fetchUrl();
    }, []);


    const fetchUrl = async () => {
        let res = await fetch(Swiggy_Api);
        let data = await res.json();
        const temp = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setRestaurantList(temp);
        setRestaurants(temp);
    }


    function updateRestaurantList(match) {
        let listCreated = permanentRestaurantList.filter((restaurant) => {
            if (restaurant.info.name.includes(match))
                return restaurant;
        })
        setRestaurantList(listCreated);
        setSearch("");
    }

    return (restaurants.length == 0) ? <Shimmer /> : (
        <>
            <div>
                <div className="w-full flex justify-center p-4 gap-2">
                    <input type="text" placeholder="Search...." value={search} onChange={(e) => setSearch(e.target.value)} className="p-4 w-1/2 border-solid border-black border-2 rounded-md"/>
                    <button className="bg-gray-400 p-2 rounded-md" onClick={() => updateRestaurantList(search)}>Search</button>
                </div>
                <div className="flex flex-wrap">
                    {restaurantList.map((restaurant) => {
                        return <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}><Card  {...restaurant.info} /></Link>
                    })}
                </div>
            </div>
        </>
    )
}

export default Body;