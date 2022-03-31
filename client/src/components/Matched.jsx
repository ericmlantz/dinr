import React from 'react'
import MatchedCard from "./MatchedCard"

const Matched = ({matches, deleteMatches}) => {
  return (
    <div>
      <h1>Matches</h1>
      <div className="restaurants-wrapper">
        {matches.map((match) => (
          <MatchedCard key={match._id} {...match} deleteMatches={deleteMatches}/>
        ))} 
      </div>
    </div>
  )
}

export default Matched