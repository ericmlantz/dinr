import './style/App.css';
import { Routes, Route} from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Swipe from './pages/Swipe'
import Match from './pages/Match'

let customer_id="624748687b04b1a490642f43"

const App = () => {

  const [restaurants, setRestaurants] = useState([])
  const [matches, setMatches] = useState([])
  const [customers, setCustomers] = useState([])
  
  const getRestaurants = async () => {
    const response = await axios.get('http://localhost:3001/swipe')
  setRestaurants(response.data.restaurants)
}

const getMatches = async () => {
  const response = await axios
  .get(`http://localhost:3001/mymatches`)
  setMatches(response.data)
  console.log('matches',matches)
}

const getAllCustomers = async () => {
  const response = await axios.get('http://localhost:3001/allcustomers')
  console.log(response)
  setCustomers(response.data.customer_id)
}
const likedMatches = async (restaurant_id) => {
  await axios
  .put(`http://localhost:3001/restaurants/${restaurant_id}`)
  getMatches()
}

const deleteRestaurants = async (restaurant_id) => {
  await axios
    .delete(`http://localhost:3001/restaurants/${restaurant_id}`)
    getRestaurants()
}

const deleteMatches = async (restaurant_id) => {
  await axios
    .delete(`http://localhost:3001/mymatches/${restaurant_id}`)
    likedMatches()
}

  return (
    <div>
      <Header />
      <main>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path="swipe" element={<Swipe getRestaurants={getRestaurants} getMatches={getMatches} restaurants={restaurants} likedMatches={likedMatches} deleteRestaurants={deleteRestaurants} matches={matches}/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="mymatches" element={<Match deleteMatches={deleteMatches} 
          deleteRestaurants={deleteRestaurants}getRestaurants={getRestaurants} restaurants={restaurants} getMatches={getMatches} matches={matches} likedMatches={likedMatches}/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App;