import Card from "./Card";
import { restaurants } from "../../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [res, setRes] = useState(restaurants);
  const[filRes,setFilRes]=useState(restaurants)
  const [searchText,setSearchText]=useState("")
 
  
  return (
    <div className="body-container">
      <div className="search-container">
        <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
        <button
          onClick={() => {
            const searched = res.filter((res) => (
              res.name.toLowerCase().includes(searchText.toLowerCase())
            ))
           setFilRes(searched)
        }}
        >Search</button>
          </div>
          <div className="filter">
            <button className="filter-btn"
              onClick={() => {
                const filtered = res.filter((restaurant) => {
                  return restaurant.rating > 4.5;
                });
                // console.log(filtered);
                setRes(filtered);
              }}
            > Top Rated</button>
        <button className="filter-btn" onClick={() => {
          setRes(restaurants)
        }}>
          All Restaurants
        </button>
       
      </div>
      <div className="restaurant-container">
        {filRes.map((restaurant) => (
          <Card key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;