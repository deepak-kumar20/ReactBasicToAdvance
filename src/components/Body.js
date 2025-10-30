import Card from "./Card";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { API_URL } from "../../utils/constant";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = () => {
  const status = useOnlineStatus();
  const [res, setRes] = useState([]);
   const [filRes, setFilRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();

    // Add delay to see shimmer UI (remove this in production)
    let actualData =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setRes(actualData);
    setFilRes(actualData);
  };

  // Show shimmer while loading
  if (res.length === 0) {
    return <Shimmer />;
  }
  if (status === false) {
    return <div>you are offline </div>
    
  }

  return (

    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const searched = res.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilRes(searched);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = res.filter((restaurant) => {
              return restaurant.info.avgRating > 4.5;
            });
            // console.log(filtered);
            setFilRes(filtered);
          }}
        >
          {" "}
          Top Rated
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilRes(res);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filRes.map((restaurant) => (
          <Card key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
