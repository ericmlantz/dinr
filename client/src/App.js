import './style/App.css';
import { Routes, Route} from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Swipe from './pages/Swipe'
import Match from './pages/Match'

let customer_id="6241f190261d3276e5f1ec43"

const App = () => {

  const [restaurants, setRestaurants] = useState([])
  const [matches, setMatches] = useState([])
  
  const getRestaurants = async () => {
    const response = await axios.get('http://localhost:3001/swipe')
  setRestaurants(response.data.restaurants)
}


const getMatches = async () => {
  const response = await axios
  .get(`http://localhost:3001/mymatches`)
  setMatches(response.data)
}

const likedMatches = async (restaurant_id) => {
  await axios
  .put(`http://localhost:3001/${customer_id}/${restaurant_id}`)
  getMatches()
}

const deleteRestaurants = async (restaurant_id) => {
  await axios
    .delete(`http://localhost:3001/${restaurant_id}`)
    getRestaurants()
    likedMatches()
}

const deleteMatches = async (_id) => {
  await axios
    .delete(`http://localhost:3001/matches/${_id}`)
    getRestaurants()
    likedMatches()
}

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="swipe" element={<Swipe getRestaurants={getRestaurants} getMatches={getMatches} restaurants={restaurants} likedMatches={likedMatches} deleteRestaurants={deleteRestaurants} matches={matches}/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="matches" element={<Match deleteMatches={deleteMatches} getRestaurants={getRestaurants} restaurants={restaurants} getMatches={getMatches} matches={matches} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;