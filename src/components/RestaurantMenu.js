import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/constant";
import useRestaurantMenu from "../../utils/useRestaurantMenu"
const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo  = useRestaurantMenu(resId);


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

  
