import React from 'react'

const Like = (props) => {
  return (
    <div className="like-wrapper">
      <button className="like-button" onClick={() => deleteRide(_id)}>Like</button>
    </div>
  )
}

export default Like