import './style/App.css';
import { Routes, Route} from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'
import Header from './components/Header'
import Home from './pages/Home'

const App = () => {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="games/details/:gameId" element={<GameDetails />} />
          <Route path="view/games/:genreId" element={<ViewGames />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;

