const fetchUrl = async ({ setRestaurants, setRestaurantList }) => {
    let res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9695121&lng=76.878282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // console.log(res);
    // if (!res.ok) return null;
    let data = await res.json();
    // console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    const temp = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setRestaurantList(temp);
    setRestaurants(temp);
}

export default fetchUrl;