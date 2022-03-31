import { useEffect } from "react";
import Matched from "../components/Matched";

const Match = ({deleteMatches, matches, getMatches, restaurants, getRestaurants}) => {

  useEffect(() => {
    getMatches()
    getRestaurants()
  }, [])

  return (
    <div className="swipe-page">
      <Matched restaurants={restaurants} matches={matches} deleteMatches={deleteMatches}/>
    </div>
  )
}

export default Match