import Restaurants from "../components/Restaurants";

const Swipe = ({restaurants, likedMatches}) => {

  return (
    <div className="swipe-page">
      <Restaurants restaurants={restaurants} likedMatches={likedMatches}/>
    </div>
  )
}

export default Swipe