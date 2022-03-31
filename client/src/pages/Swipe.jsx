import Restaurants from "../components/Restaurants";
import { useEffect } from "react";


const Swipe = ({restaurants, likedMatches, deleteRestaurants, getRestaurants, matches, getMatches}) => {

  useEffect(() => {
    getRestaurants()
    getMatches()
  },[])

  return (
    <div className="swipe-page">
      <Restaurants restaurants={restaurants} likedMatches={likedMatches} deleteRestaurants={deleteRestaurants} matches={matches} getRestaurants={getRestaurants}/>
    </div>
  )
}

export default Swipe