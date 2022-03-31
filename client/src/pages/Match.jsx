import { useEffect } from "react";
import Matched from "../components/Matched";

const Match = ({matches, getMatches, restaurants, getRestaurants}) => {

  useEffect(() => {
    getMatches()
    getRestaurants()
  }, [])

  return (
    <div className="swipe-page">
      <Matched restaurants={restaurants} matches={matches}/>
    </div>
  )
}

export default Match