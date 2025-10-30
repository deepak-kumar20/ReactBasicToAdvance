import { useState, useEffect } from "react";
import { API_URL } from "./constant";
const useRestaurantMenu = (resId) => {
      const [resInfo, setResInfo] = useState(null);
    
        useEffect(() => {
          fetchMenu();
        }, [resId]);

        const fetchMenu = async () => {
          const data = await fetch(API_URL);
          const json = await data.json();
          const allRestaurants =
            json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
          const restaurant = allRestaurants.find(
            (res) => res.info.id === resId
          );
          setResInfo(restaurant);
        };
    return resInfo;
}
export default useRestaurantMenu;