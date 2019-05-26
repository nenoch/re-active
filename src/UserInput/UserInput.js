import React from 'react';

const UserInput = ({
    nameHandler,
    name,
    ageHandler,
    age
}) => {

    return (<div>
        <input type='text'
            onChange={nameHandler}
            value={name}
            placeholder='add name' />
        <input type='text'
            onChange={ageHandler}
            value={age}
            placeholder='add age' />
    </div>)
};

export default UserInput;