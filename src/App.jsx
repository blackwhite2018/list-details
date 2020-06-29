import React, { useState, useEffect } from 'react';
import List from './components/List/List';
import Details from './components/Details/Details';
import './css/index.css';

const App = () => {
    const [isLoadList, setIsLoadList] = useState(false);
    const [list, setList] = useState([]);
    const [profile, setProfile] = useState({});
    const [idProfile, setIdProfile] = useState(null);

    const getDataProfile = id => {
        if (id !== profile.id) {
            setIdProfile(id);
        }
    };

    useEffect(() => {
        if (!isLoadList) {
            fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
                .then(response => response.json())
                .then(json => {
                    setList(json);
                    setIsLoadList(true);
                })
        }
    });

    useEffect(() => {
        (async function() {
            if (idProfile !== null) {
                const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${ idProfile }.json`);
                const json = await response.json();
                console.log(idProfile, json)
                setProfile(json);
            }
        }());
    }, [idProfile]);

    return (
        <div className="container">
            { isLoadList && <List list={ list } getDataProfile={ getDataProfile } /> || <p>download...</p> }
            { profile.id && <Details data={ profile } /> }
        </div>
    );
};

export default App;

