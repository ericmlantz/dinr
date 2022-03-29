import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  return (
    <div className="homepage">
      <div className="top-page">
      <div className='title'>Dinr</div>
        <div className="home-description">Description</div>
      <img className='computer' src='https://i.imgur.com/pbkRh0V.png' alt="hey" width='50%'/>
      </div>
      <div className="bottom-page">
      </div>
    </div>

  )

}

export default Home