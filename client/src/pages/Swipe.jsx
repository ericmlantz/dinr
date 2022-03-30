import Restaurants from "../components/Restaurants";
import { useEffect } from "react";

const Swipe = ({restaurants, likedMatches, deleteRestaurants, getRestaurants}) => {

  useEffect(() => {
    getRestaurants()
  }, [])

  return (
    <div className="swipe-page">
      <Restaurants restaurants={restaurants} likedMatches={likedMatches} deleteRestaurants={deleteRestaurants}/>
    </div>
  )
}

export default Swipe