import React from 'react'

const RestaurantCard = ({_id, name,logo,location,typeOfFood,description,bestDish,phone,likedMatches, deleteRestaurants}) => {
  return (
    <div className="card-wrapper">
      <img className="logo" src={logo} alt={`${name} Logo`}/>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{typeOfFood}</p>
      <p>{description}</p>
      <img className="best-dish" src={bestDish} alt="Popular Dish" />
      <p>{phone}</p>
      <div className="choice-button-wrapper">
        <button className='like-button' onClick={() => likedMatches(_id)}>Like</button>
        <button className='dislike-button'onClick={() => deleteRestaurants(_id)}>Dislike</button>
      </div>
    </div>
  )
}

export default RestaurantCard