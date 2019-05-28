import React, { useContext } from 'react';
import { AuthContext } from '../../context';

const Header = ({
    onLoadUsers,
    onLoadAuth
}) => {
    const auth = useContext(AuthContext);
    return (
        <header className="App-header">
            { auth.status && <button onClick={onLoadUsers}>users</button> }
            <button onClick={onLoadAuth}>Auth</button>
        </header>
    )
};

export default Header;