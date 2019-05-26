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
            placeholder='add name' />
        <input type='text'
            onChange={ageHandler}
            placeholder='add age' />
    </div>)
};

export default UserInput;