import React, { useEffect, useRef } from 'react';

const UserInput = ({
    nameHandler,
    ageHandler
}) => {

    const mouseHandler = e => {
        console.log('I\'m moving!');
    }

    useEffect(() => {
        document.addEventListener('mousemove', mouseHandler)
        // Clean up
        return () => {
            document.removeEventListener('mousemove', mouseHandler)
        }
        // Adding second arg as [] runs the clean up on unmount
    }, []);

    const nameInputRef = useRef();

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