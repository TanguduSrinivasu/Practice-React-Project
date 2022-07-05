import React from 'react'
import Person from './Person'

function NameList() {

    //const names = ['Srinu', 'Siva', 'Sarath']
    //const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id : 1,
            name : 'Srinu',
            age : 23
        },
        {
            id : 2,
            name : 'Siva',
            age : 24
        },
        {
            id : 3,
            name : 'Sarath',
            age : 23
        },
        {
            id : 4,
            name : 'Hari',
            age : 22
        },
        {
            id : 5,
            name : 'Sharan',
            age : 23
        }
    ]
    
    const personList = persons.map(person => <Person key={person.id} person={person}> </Person>)
    //person is the parameter which is passed as a prop to the Person component
    //Better way is to refactor JSX into seperate component 
    //when you open the console in UI error will be populated because there is no unique key prop so add key prop
  return (
    <div>
    {
        // names.map(name => <h2>{name}</h2>)
        //nameList
        personList
    }
    </div>
  )
}

export default NameList