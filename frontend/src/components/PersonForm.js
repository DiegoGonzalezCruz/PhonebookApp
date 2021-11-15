import phoneService from "../services/phoneService"
export default function PersonForm({ setNewName, setNewPhone, newName, newPhone, persons, setPersons, handleMessage }) {

    const handleNameChange = (event) => {
        //console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const addContact = (e) => {
        e.preventDefault()
        //console.log('saving name...', 'ready')
        const nameObject = {
            name: newName,
            number: newPhone
        }
        if (validateInput(newName, newPhone) === false) return
        if (checkRepeated(newName)) {
            return updateData(nameObject)
        }
        phoneService
            .create(nameObject)
            .then(res => {
                setPersons(persons.concat(res));
                setNewName('');
                setNewPhone('');
                handleMessage(
                    `User created ${res.name}`
                )
            })
            .catch(error => {
                console.log(error.response)
                handleMessage(
                    `There is an error.`
                )
            })
    }
    const checkRepeated = (newName) => {
        if (persons.filter((person) => person.name === newName).length > 0) {
            //console.log(newName)
            return true
        } else return false
    }

    const updateData = (nameObject) => {
        const nameId = persons.find(element => element.name === newName).id
        //console.log(nameObject, 'from updateData')
        phoneService
            .update(nameId, nameObject)
            .then(res => {
                //console.log('from then updateData', res)
                handleMessage(
                    `User updated ${res.data.name}`
                )
                const newNames = [...persons]
                //console.log(nameObject, 'from then')
                newNames.find(el => el.name === res.data.name).number = res.data.number
                setPersons(newNames)
                setNewName('')
                setNewPhone('')
            })
    }

    const validateInput = (name, number) => {
        if (!name) {
            handleMessage(
                `There is no name`
            )
            return false
        }
        if (!number ) {
            handleMessage(
                `There is no number`
            )
            return false
        }
    }

    return (
        <form>
            <div>
                <h2>Add new entry</h2>
                <p>name:</p>
                <input
                    value={newName}
                    onChange={handleNameChange}
                />
                <p>telephone:</p>
                <input
                    value={newPhone}
                    onChange={handlePhoneChange}
                />
            </div>
            <div>
                <button
                    type="submit"
                    onClick={addContact}
                >
                    Add
                </button>
            </div>
        </form>
    )
}
