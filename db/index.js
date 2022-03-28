const mongoose = require('mongoose')

mongoose
  .connect('mongodb://127.0.0.1:27017/dinrDatabase')
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((err) => {     //e for error
  console.error('Connection error', err.message)
  })

// Creates better debugging information for our queries if the following line is added
mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db