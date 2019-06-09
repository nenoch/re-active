import React, { useEffect, useRef } from 'react';

const UserInput = ({
    nameHandler,
    ageHandler
}) => {

    const mouseHandler = e => {
        console.log('I\'m moving!');
    }

    // Select a DOM node. This is just an example, do not use unless:
    // - Managing focus, text selection, or media playback
    // - Triggering imperative animations (JS e.g. parallax scrolling)
    // - Integrating with third-party DOM libraries
    const nameInputRef = useRef();

    useEffect(() => {
        document.addEventListener('mousemove', mouseHandler)
        // Clean up
        return () => {
            document.removeEventListener('mousemove', mouseHandler)
        }
        // Adding second arg as [] runs the clean up on unmount
    }, []);

    return (<div>
        <input type='text'
            onChange={() => nameHandler(nameInputRef.current.value)}
            placeholder='add name'
            ref={nameInputRef}
        />
        <input type='text'
            onChange={ageHandler}
            placeholder='add age' />
    </div>)
};

export default UserInput;