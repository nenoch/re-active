import React, { useContext } from 'react';
import { AuthContext } from '../../context';

const Auth = () => {
    // Access state props without passing props but accessing the context
    const auth = useContext(AuthContext);
    return (<button onClick={auth.login}>login</button>)
};

export default Auth;