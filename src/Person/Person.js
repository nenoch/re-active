import React from 'react';
import './Person.css';

const Person = ({
    key,
    name,
    age,
    click,
    change,
    children
}) => (
        <div className="Person">
            <p onClick={click}>I'm a {name} and I am {age}
                <span> {children}</span>
            </p>
            <input type='text'
                onChange={change}
                value={name} />
        </div>
    );

export default Person;