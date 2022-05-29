import { useEffect } from "react";
import Matched from "../components/Matched";

const Match = ({deleteRestaurants, deleteMatches, matches, getMatches, restaurants, getRestaurants}) => {

  useEffect(() => {
    getMatches()
    getRestaurants()
  }, [])

  return (
    <div className="whole">
    <div className="swipe-page">
      <Matched restaurants={restaurants} matches={matches} deleteMatches={deleteMatches} deleteRestaurants={deleteRestaurants}/>
    </div>
    </div>
  )
}

export default Match