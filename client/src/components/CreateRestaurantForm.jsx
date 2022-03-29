import React from 'react'

const CreateRestaurantForm = (props) => {
  return (
    <div className = "form-wrapper">
      <h1>Create Restaurant Profile</h1>
      <br/>
      <form onSubmit={props.createRestaurant}>
        <div>
          <label><b>Name:</b></label>
          <input
            type="text"
            value={props.name}
            placeholder="Restaurant Name"
            onChange={props.handleNameChange}
          />
        </div>
        <div>
          <label><b>Logo:</b></label>
          <input
            type="text"
            value={props.logo}
            placeholder="Logo Image URL"
            onChange={props.handleLogoChange}
          />
        </div>
        <div>
          <label><b>Location:</b></label>
          <input
            type="text"
            value={props.location}
            placeholder="Street, City, State Zip"
            onChange={props.handleLocationChange}
          />
        </div>
        <div>
          <label><b>Type of Food:</b></label>
          <input
            type="text"
            value={props.typeOfFood}
            placeholder="Pick from Dropdown"
            onChange={props.handleTypeOfFoodChange}
          />
        </div>
        <div>
          <label><b>Description:</b></label>
          <input
            type="text"
            value={props.description}
            placeholder="Restaurant Description"
            onChange={props.handleDescriptionChange}
          />
        </div>
        <div>
          <label><b>Best Dish:</b></label>
          <input
            type="text"
            value={props.bestDish}
            placeholder="Popular Dish Image URL"
            onChange={props.handleBestDishChange}
          />
        </div>
        <div>
          <label><b>Phone Number</b></label>
          <input
            type="text"
            value={props.phone}
            placeholder="Restaurant Phone Number"
            onChange={props.handlePhoneChange}
          />
        </div>
        <div className="button-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateRestaurantForm