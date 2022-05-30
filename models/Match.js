const { Schema } = require('mongoose')

const Match = new Schema(       //Match the file name and is singular and Pascal Case
  {
    name: {type: String, required: true},
    matchedRestaurants: { type: Array, required: false },
  },
  { timestamps: true }        //The timestamps option tells mongoose to assign createdAt and updatedAt fields to your schema. The type assigned is Date. By default, the names of the fields are createdAt and updatedAt. Customize the field names by setting timestamps.createdAt and timestamps.updatedAt
)

module.exports = Match