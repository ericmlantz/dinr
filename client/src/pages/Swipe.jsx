import Restaurants from "../components/Restaurants";

const Swipe = ({restaurants}) => {

  return (
    <div className="swipe-page">
      <Restaurants restaurants={restaurants} />
    </div>
  )
}

export default Swipe