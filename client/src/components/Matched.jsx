import React from 'react'
import MatchedCard from "./MatchedCard"

const Matched = ({likedMatches,matches, deleteMatches, deleteRestaurants}) => {
  return (
    <div>
      <h1 className="pageTitle">Matches</h1>
      <div className="restaurants-wrapper">
        {matches.map((match) => (
          <MatchedCard key={match._id} {...match} deleteMatches={deleteMatches}
          deteleteRestaurants={deleteRestaurants}/>
        ))} 
      </div>
    </div>
  )
}

export default Matched