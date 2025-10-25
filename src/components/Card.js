//import { CDN_URL } from "../../utils/constant";

import { Link } from "react-router-dom";

const Card = ({ restaurant }) => {
  const { name, imagecloudinaryImageId, cuisines, avgRating, costForTwo, sla ,id} =
    restaurant.info;
  
  
  // Use only placeholder image for all restaurants
  const imageURL = "https://placehold.co/300x200/png?text=Restaurant+Image";


  return (
    <Link to={`/restaurant/${id}`}>
    <div className="card-container">
      <div className="card">
        <img className="card-image" src={imageURL} alt={name} />
        <h2>{name}</h2>
        <h3>Rating: {avgRating}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{sla.slaString}</p>
      </div>
      </div>
      </Link>
  );
};
export default Card;
