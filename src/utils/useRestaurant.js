import { useState, useEffect } from "react";

const useRestaurant = (resid) => {
  const [restaurant, setRestaurant] = useState(null);
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

    setRestaurant(json?.data?.cards[2]?.card?.card?.info);

    const regularCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const itemCards = regularCards.flatMap(
      (card) => card?.card?.card?.itemCards || []
    );
    const menu = itemCards.map((item) => item?.card?.info).filter(Boolean);

    setResMenu(menu);
  }

  return [restaurant, resMenu];
};

export default useRestaurant;
