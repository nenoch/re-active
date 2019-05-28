import React from 'react';

const UserOutput = ({
    click,
    name,
    age
}) => (
        <div>
            <h5>new user: <span>{name}</span> <span>{age}</span></h5>
            { name && age ?
                <button
                onClick={click}
                >Add user</button>
                : null
            }
        </div>
    );

export default UserOutput;