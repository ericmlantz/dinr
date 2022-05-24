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

  const [restaurants, setRestaurants] = useState({
    name: ' ',
    logo: ' ',
    location: ' ',
    typeOfFood: ' ',
    description: ' ',
    bestDish: ' ',
    phone: ' '
})
  const [matches, setMatches] = useState([])
  const [customers, setCustomers] = useState([])
  
  const getRestaurants = async () => {
    const response = await axios.get('/swipe')
  setRestaurants(response.data.restaurants)
  console.log(response.data)
}

const getMatches = async () => {
  const response = await axios
  .get(`/mymatches`)
  setMatches(response.data)
}

const getAllCustomers = async () => {
  const response = await axios.get('/allcustomers')
  console.log(response)
  setCustomers(response.data.customer_id)
}
const likedMatches = async (restaurant_id) => {
  await axios
  .put(`/${customer_id}/restaurant/${restaurant_id}`)
  getMatches()
}

const deleteRestaurants = async (restaurant_id) => {
  await axios
    .delete(`/${restaurant_id}`)
    getRestaurants()
    likedMatches()
}

const deleteMatches = async (_id) => {
  await axios
    .delete(`/matches/${_id}`)
    getRestaurants()
    likedMatches()
}

  return (
    <div>
      <Header />
      <main>
        <Routes >
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