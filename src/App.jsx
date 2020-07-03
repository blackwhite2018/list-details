import React, { useState, useEffect } from 'react';
import List from './components/List/List';
import Details from './components/Details/Details';
import './css/index.css';

const App = () => {
    const [idProfile, setIdProfile] = useState(null);

    const getDataProfile = id => {
        if (id !== idProfile) {
            setIdProfile(id);
        }
    };

    return (
        <div className="container">
            { <List getDataProfile={ getDataProfile } /> || <p>download...</p> }
            { idProfile && <Details id={ idProfile } /> }
        </div>
    );
};

export default App;

