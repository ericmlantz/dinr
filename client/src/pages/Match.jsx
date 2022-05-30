import { useEffect } from "react";
import Matched from "../components/Matched";

const Match = ({deleteRestaurants, deleteMatches, matches, getMatches, restaurants, getRestaurants}) => {

  useEffect(() => {
    getMatches()
    getRestaurants()
  }, [])

  return (
    <div className="whole">
      {matches ?
    <div className="swipe-page">
      <Matched restaurants={restaurants} matches={matches} deleteMatches={deleteMatches} deleteRestaurants={deleteRestaurants}/>
    </div>
    : <div className="card-wrapper">
        <h1>No Matches Found</h1>
      </div>}
    </div>
  )
}

export default Match