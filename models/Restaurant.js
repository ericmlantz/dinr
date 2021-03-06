const { Schema } = require('mongoose')

const Restaurant = new Schema(       //Match the file name and is singular and Pascal Case
  {
    name: { type: String, required: true},      //the type is capitalized usually. Example {type: String}
    logo: { type: String, required: true},
    location: { type: String, required: true},
    typeOfFood: { type: String, required: true},
    description: {type: String, required: true},
    bestDish: {type: String, required: true},
    phone: {type: String, required: true}
  },
  { timestamps: true }        //The timestamps option tells mongoose to assign createdAt and updatedAt fields to your schema. The type assigned is Date. By default, the names of the fields are createdAt and updatedAt. Customize the field names by setting timestamps.createdAt and timestamps.updatedAt
)

module.exports = Restaurant