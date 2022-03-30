import Restaurants from "../components/Restaurants";

const Swipe = ({restaurants, likedMatches, deleteRestaurants}) => {

  return (
    <div className="swipe-page">
      <Restaurants restaurants={restaurants} likedMatches={likedMatches} deleteRestaurants={deleteRestaurants}/>
    </div>
  )
}

export default Swipe