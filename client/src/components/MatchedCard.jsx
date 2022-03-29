import React from 'react'

const MatchedCard = ({name,logo,location,typeOfFood,description,bestDish,phone}) => {
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
        <button className='dislike-button'>Dislike</button>
      </div>
    </div>
  )
}

export default MatchedCard