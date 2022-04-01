import React from 'react'

const MatchedCard = ({_id,name,logo,location,typeOfFood,description,bestDish,phone, deleteMatches}) => {
  return (
    <div className="card-wrapper">
      <img className="RestaurantCard_logo" src={logo} alt={`${name} Logo`}/>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{typeOfFood}</p>
      <p>{description}</p>
      <img className="RestaurantCard_bestDish" src={bestDish} alt="Popular Dish" />
      <p>{phone}</p>
      <div className="choice-button-wrapper">
        <button className='dislike-button' onClick={() => deleteMatches(_id)}>Unmatch</button>
      </div>
    </div>
  )
}

export default MatchedCard