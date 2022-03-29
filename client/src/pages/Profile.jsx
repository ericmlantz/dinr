import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import CreateRestaurantForm from "../components/CreateRestaurantForm";



const Profile = () => {

    const [name, setName] = useState('')
    const [logo, setLogo] = useState('')
    const [location, setLocation] = useState('')
    const [typeOfFood, setTypeOfFood] = useState('')
    const [description, setDescrition] = useState('')
    const [bestDish, setBestDish] = useState('')
    const [phone, setPhone] = useState('')


  const fetchRestaurants = async () => {
      const response = await axios.get('http://localhost:3001/profile')
  }

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
    setDescrition(event.target.value)
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
      .post('http://localhost:3001/addrestaurant', {
        name: name,
        logo: logo,
        location: location,
        typeOfFood: typeOfFood,
        description: description,
        bestDish: bestDish,
        phone: phone,
      })
      .then(function (response) {
        fetchRestaurants()
      })
      .catch(function (error) {
        console.log(error)
      })
    setName('')
    setLogo('')
    setLocation('')
    setTypeOfFood('')
    setDescrition('')
    setBestDish('')
    setPhone('')
  }

  return (
    <div className='profile-page'>
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
      <Restaurant restaurant={restaurant} />
    </div>

  )

}

export default Profile