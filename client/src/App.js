import './style/App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <CreateRestaurantForm />
    </div>
  );
}

export default App;
