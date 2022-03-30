import { useEffect } from "react";
import Matched from "../components/Matched";

const Match = ({matches, getMatches, restaurants}) => {

  useEffect(() => {
    getMatches()
  }, [])
  // const unMatch = (index) => {
  //   console.log(matches)
  //   let spliced = matches.splice(index,1)
  //   restaurants.map(spliced)
  //   console.log("Restaurants List:",restaurants)
  // }

  return (
    <div className="swipe-page">
      <Matched restaurants={restaurants} matches={matches}/>
    </div>
  )
}

export default Match