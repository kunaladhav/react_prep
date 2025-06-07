import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  const displayCuisines = cuisines.slice(0, 2);
  const remainingCusines = cuisines.length - displayCuisines.length;

  return (
    <div className="card w-52 p-2 m-5 shadow-md">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-semibold text-xl">{name}</h2>
      <h3 className="text-sm">
        {displayCuisines.join(", ")}
        {remainingCusines > 0 && "..."}

        {/* {cuisines.join(", ")} */}
      </h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
