import React from 'react'
import RestaurantCard from "./RestaurantCard"

const Restaurants = ({restaurants}) => {
  return (
    <div>
      <h1>Restaurants</h1>
      <div className="restaurants-wrapper">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} {...restaurant} />
        ))} 
      </div>
    </div>
  )
}

export default Restaurants