const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGODB_URI_LOCAL

console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('****connected to MongoDB****')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const contactSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        unique: true,
        required: true,
        minLength: 3,
    },
    number: {
        type: Number,
        required: true,
        minLength: 8,
    },
})
contactSchema.plugin(uniqueValidator);


contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Contact', contactSchema)
