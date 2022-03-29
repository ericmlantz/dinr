import { useEffect } from "react";
import Matched from "../components/Matched";

const Match = ({matches, getMatches}) => {

  useEffect(() => {
    getMatches()
  }, [])
  return (
    <div className="swipe-page">
      <Matched matches={matches} />
    </div>
  )
}

export default Match