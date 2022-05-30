import React from 'react'
import RestaurantCard from "./RestaurantCard"

const Restaurants = ({restaurants, likedMatches, deleteRestaurants, matches}) => {

  let idArray = []
  matches.forEach(match => {
    idArray.push(match._id)
  });
  console.log("idArray:", idArray)
  
  return (
    <div>
      <h1 className="pageTitle">Restaurants</h1>
      <div className="restaurants-wrapper">
        {restaurants.map((restaurant,idx) => {
          if(idArray.includes(restaurant._id)) {
            restaurants.splice(idx, 1)
            console.log("restaurant:", restaurants)
          }else{
            return <RestaurantCard key={restaurant._id} restaurant={restaurant} {...restaurant} likedMatches={likedMatches} deleteRestaurants={deleteRestaurants}/>
          }
        })}
      </div>
    </div>
  )
}
export default Restaurants