import React from 'react';
import Person from '../Person/Person';

const List = (props) => {
    console.log('re-rendering!');
    return props.persons.map(person =>
        <Person
            key={person.id}
            name={person.name}
            age={person.age}
            change={(e) => props.nameHandler(e, person.id)}
        >
            and I love yoga
      </Person>
    )
}

export default List;