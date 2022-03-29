import './style/App.css';
import { Routes, Route} from "react-router-dom";
import {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Swipe from './pages/Swipe'
import Match from './pages/Match'

//
const App = () => {


//Swipe useState and useEffect
  const [restaurants, setRestaurants] = useState('')
  
  useEffect(() => {
    const getRestaurants = async () => {
    const response = await axios.get('http://localhost:3001/swipe')
  setRestaurants(response.data.restaurants)
}
  getRestaurants()
}, [])

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="swipe" element={<Swipe restaurants={restaurants}/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="matches" element={<Match />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;