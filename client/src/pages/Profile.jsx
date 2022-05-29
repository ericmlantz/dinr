import {useState} from 'react'
import axios from 'axios'
import CreateRestaurantForm from "../components/CreateRestaurantForm";
import { useNavigate } from 'react-router-dom';


const Profile = ({restaurants}) => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
    const [logo, setLogo] = useState('')
    const [location, setLocation] = useState('')
    const [typeOfFood, setTypeOfFood] = useState('')
    const [description, setDescription] = useState('')
    const [bestDish, setBestDish] = useState('')
    const [phone, setPhone] = useState('')

  const handleNameChange = (event) => {
      setName(event.target.value)
  }
  const handleLogoChange = (event) => {
      setLogo(event.target.value)
  }
  const handleLocationChange = (event) => {
      setLocation(event.target.value)
  }
  const handleTypeOfFoodChange = (event) => {
      setTypeOfFood(event.target.value)
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }
  const handleBestDishChange = (event) => {
      setBestDish(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  const createRestaurantForm = async (event) => {
    event.preventDefault()
  await axios
    .post('http://localhost:3001/profile', {
      name: name,
      logo: logo,
      location: location,
      typeOfFood: typeOfFood,
      description: description,
      bestDish: bestDish,
      phone: phone,
    })
    .then(function (response) {
      
    })
    .catch(function (error) {
      console.log(error)
    })
  setName('')
  setLogo('')
  setLocation('')
  setTypeOfFood('')
  setDescription('')
  setBestDish('')
  setPhone('')
  navigate('/swipe')
}
    
  return (
    <div className="whole">
      <CreateRestaurantForm
        name={name}
        logo={logo}
        location={location}
        typeOfFood={typeOfFood}
        description={description}
        bestDish={bestDish}
        phone={phone}
        handleNameChange={handleNameChange}
        handleLogoChange={handleLogoChange}
        handleLocationChange={handleLocationChange}
        handleTypeOfFoodChange={handleTypeOfFoodChange}
        handleDescriptionChange={handleDescriptionChange}
        handleBestDishChange={handleBestDishChange}
        handlePhoneChange={handlePhoneChange}
        createRestaurant={createRestaurantForm}
        />
    </div>
  )
}

export default Profile
