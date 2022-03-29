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
            placeholder="Enter restaurant Name:"
            onChange={props.handleNameChange}
          />
        </div>
        <div>
          <label><b>Logo:</b></label>
          <input
            type="text"
            value={props.logo}
            placeholder="Enter logo url"
            onChange={props.handleLogoChange}
          />
        </div>
        <div>
          <label><b>Location:</b></label>
          <input
            type="text"
            value={props.location}
            placeholder="Enter restaurant address"
            onChange={props.handleLocationChange}
          />
        </div>
        <div>
          <label><b>Type of Food:</b></label>
          <input
            type="text"
            value={props.typeOfFood}
            placeholder="Enter food type"
            onChange={props.handleTypeOfFoodChange}
          />
        </div>
        <div>
          <label><b>Description:</b></label>
          <input
            type="text"
            value={props.description}
            placeholder="Enter food type"
            onChange={props.handleDescriptionChange}
          />
        </div>
        <div>
          <label><b>Best Dish:</b></label>
          <input
            type="text"
            value={props.bestDish}
            placeholder="Enter best item image url"
            onChange={props.handleBestDishChange}
          />
        </div>
        <div>
          <label><b>Phone Number</b></label>
          <input
            type="text"
            value={props.phone}
            placeholder="Enter food type"
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