import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  return (
    <div className="homepage">
      <div className="top-page">
      <h1 className='title'>Dinr</h1>
        <p className="home-description">Description</p>
      <img className='computer-img' src='https://i.imgur.com/pbkRh0V.png' alt="computer" width='50%'/>
      </div>
      <div className="bottom-page">
      </div>
    </div>
  )
}

export default Home