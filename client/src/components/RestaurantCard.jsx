import React from 'react'

const RestaurantCard = (props) => {
  return (
    <div className="card-wrapper">
      <img className="logo" src={props.logo} alt={`${props.name} Logo`}/>
      <h2>{props.name}</h2>
      <p>{props.location}</p>
      <p>{props.typeOfFood}</p>
      <p>{props.description}</p>
      <img className="best-dish" src={props.bestDish} alt="Popular Dish" />
      <p>{props.phone}</p>
      {/*<button className="delete-button" onClick={() => deleteRide(_id)}>Delete Ride</button>*/}
    </div>
  )
}

export default RestaurantCard