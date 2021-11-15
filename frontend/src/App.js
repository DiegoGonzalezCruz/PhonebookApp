import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phoneService from './services/phoneService'
import Notification from './components/Notification'

const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const [message, setMessage] = useState('')

    const getAllHook = () => {
        phoneService
            .getAll()
            .then(initialPhones => {
                setPersons(initialPhones)
            })
    }
    useEffect(getAllHook, [])

    const handleDelete = (e) => {
        //console.log(typeof e.target.value)
        if (!window.confirm('Are you sure?')) return
        phoneService.deleteId(e.target.value)
        setPersons(persons.filter(p => p.id !== e.target.value))
        let contactName = persons.filter(p => p.id === e.target.value)[0].name
        handleMessage(`usuario ${contactName} borrado`)
    }

    const handleMessage = (msg) => {
        //console.log(`phonebook changed ${status}`)
        setMessage(
            <h1>{msg}</h1>
        )
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter
                setFilterValue={setFilterValue}
            />
            <PersonForm
                setNewName={setNewName}
                setNewPhone={setNewPhone}
                newName={newName}
                newPhone={newPhone}
                persons={persons}
                setPersons={setPersons}
                setMessage={setMessage}
                handleMessage={handleMessage}

            />
            <Notification message={message} />
            <h2>Numbers</h2>
            <Persons
                persons={persons}
                filterValue={filterValue}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default App
