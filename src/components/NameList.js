import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['name1', 'name2', 'name3', 'name4'];
    const persons = [{id:1,name:'name1',age:30,skill:'React'},
    {id:2,name:'name2',age:25,skill:'Angular'},
    {id:3,name:'name3',age:35,skill:'React JS'}]
    const namelist = names.map(name =>
        <h2>{name}</h2>
    )
    
    const personlist = persons.map(person =>
        <Person key={person.id} person={person}></Person>
    )
    return (
        <div>{personlist}</div>
    )
}

export default NameList
