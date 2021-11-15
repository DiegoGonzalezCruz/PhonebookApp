

export default function Persons({ persons, filterValue, handleDelete }) {
    const personsToFilter = filterValue
        ? persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()))
        : persons
    return (
        <ul>
            {personsToFilter.map(person =>
                <li key={person.name + person.id + person.number}>
                    {person.name} - {person.number}
                    <button value={person.id} onClick={handleDelete}>Delete</button>
                </li>
            )}
        </ul>
    )
}