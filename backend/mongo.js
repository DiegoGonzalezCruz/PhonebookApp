const command = process.argv[2]
const person = process.argv[3]
const number = process.argv[4]
/* const person = process.argv[3]
const number = process.argv[4] */
//console.log(password, person, number)

const mongoose = require('mongoose')
const url = `mongodb://localhost:27017/PhonebookApp`
mongoose.connect(url)

const contactSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: Number,
})


const Contact = mongoose.model('Contact', contactSchema)


if (command === 'listall') {
    Contact.find({}).then(result => {
        result.forEach(contact => {
            console.log(contact)
        })
        mongoose.connection.close()
    })
}
else if (command === 'add') {
    if (person && number !== '') {
        const note = new Contact({
            name: person,
            number: number,
        })
        note.save().then(result => {
            console.log(`Adding => Name:${person} & Phone:${number}`)
            mongoose.connection.close()
        })
    } else {
        console.log('must provide person name and number')
        mongoose.connection.close()

    }
}
else {
    console.log('Must provide Person and Number')
}

/* const password = process.argv[2]

//adding entries
//node mongo.js yourpassword Anna 040-1234556


//listing all
//node mongo.js yourpassword const mongoose = require('mongoose') */
