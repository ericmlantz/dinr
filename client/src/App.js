import './style/App.css';
import { Routes, Route} from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Swipe from './pages/Profile'
import Match from './pages/Match'

const App = () => {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="swipe" element={<Swipe />} />
          <Route path="profile" element={<Profile />} />
          <Route path="matches" element={<Match />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;

