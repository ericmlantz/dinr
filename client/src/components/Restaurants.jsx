import React from 'react'
import RestaurantCard from "./RestaurantCard"

const Restaurants = ({restaurants, likedMatches, deleteRestaurants}) => {
  return (
    <div>
      <h1>Restaurants</h1>
      <div className="restaurants-wrapper">
        {restaurants.map((restaurant,idx) => {
          if(restaurant._id=== matched) {
            return null;
          } else {
            return <RestaurantCard key={restaurant._id} {...restaurant} likedMatches={likedMatches} deleteRestaurants={deleteRestaurants}/>
          }
        })} 
      </div>
    </div>
  )
}

export default Restaurants