import { IMG_CDN_URL } from "../config";

const FoodItems = ({ name, description, imageId, defaultPrice }) => {
  return (
    <div className="card w-52 p-2 m-5 shadow-md">
      <img src={IMG_CDN_URL + imageId} />
      <h2 className="font-semibold text-xl">{name}</h2>
      <h3 className="text-sm">{description}</h3>
      <h4>Price: {defaultPrice / 100} </h4>
    </div>
  );
};

export default FoodItems;
