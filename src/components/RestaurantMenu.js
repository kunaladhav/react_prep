import { IMG_CDN_URL } from "../config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resid } = useParams();
  // console.log(resid);

  /**
   *
   * Logic in useRestaurant
   *
   */

  // const [restaurant, setRestaurants] = useState({});
  // const [resMenu, setResMenu] = useState([]);

  const [restaurant, resMenu] = useRestaurant(resid);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant id: {resid}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} Stars</h3>
        <h3>{restaurant.costForTwoMsg} </h3>
      </div>
      <div className="p-4">
        <h2>Menu</h2>
        <ul>
          {resMenu.map((item, index) => (
            <li key={index}>
              {item.name} -{" "}
              <button
                className="p-1 bg-green-100"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
