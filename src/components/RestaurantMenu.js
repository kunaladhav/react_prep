import { IMG_CDN_URL } from "../config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resid } = useParams();
  console.log(resid);

  const [restaurant, setRestaurants] = useState({});
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, [resid]);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(json.data);

    setRestaurants(json?.data?.cards[2]?.card?.card?.info);

    const regularCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const itemCards = regularCards.flatMap(
      (card) => card?.card?.card?.itemCards || []
    );
    const menu = itemCards.map((item) => item?.card?.info).filter(Boolean);

    setResMenu(menu);
  }

  console.log(resMenu);
  console.log(typeof resMenu);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resid}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} Stars</h3>
        <h3>{restaurant.costForTwoMsg} </h3>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {resMenu.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
