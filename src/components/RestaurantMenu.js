import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/constant";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    
    useEffect(() => {
        fetchMenu();
    },[resId])

  const fetchMenu = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const allRestaurants =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    const restaurant = allRestaurants.find((res) => res.info.id === resId);
    setResInfo(restaurant);
  };

  return (
    <div>
      <h1>{resInfo?.info.name}</h1>
      <h2>Menu</h2>
      <ul>
              {
                  resInfo?.info.cuisines.map((cuisine, index) => (
                      <li key={index}>{cuisine}</li>
                  ))
        }
      </ul>
    </div>
  );
};

export default RestaurantMenu;

  
