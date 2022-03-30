import React from 'react'
import MatchedCard from "./MatchedCard"

const Matched = ({matches}) => {
  console.log(matches)
  return (
    <div>
      <h1>Matches</h1>
      <div className="restaurants-wrapper">
        {matches.map((match) => (
          <MatchedCard key={match._id} {...match}/>
        ))} 
      </div>
    </div>
  )
}

export default Matched