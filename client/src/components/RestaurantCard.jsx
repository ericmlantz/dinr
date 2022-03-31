import React from 'react'

const RestaurantCard = ({_id, name,logo,location,typeOfFood,description,bestDish,phone,likedMatches, deleteRestaurants}) => {
  return (
    <div className="card-wrapper">
      <img className="RestaurantCard_logo" src={logo} alt={`${name} Logo`}/>
      <h2>{name}</h2>
      <p className="RestaurantCard_location">{location}</p>
      <p className="RestaurantCard_type">{typeOfFood}</p>
      <p className="RestaurantCard_description">{description}</p>
      <img className="RestaurantCard_bestDish" src={bestDish} alt="Popular Dish" />
      <p>{phone}</p>
      <div className="choice-button-wrapper">
        <button className='choice-button' onClick={() => likedMatches(_id)}>Like</button>
        <button className='choice-button' onClick={() => deleteRestaurants(_id)}>Dislike</button>
      </div>
    </div>
  )
}

export default RestaurantCard