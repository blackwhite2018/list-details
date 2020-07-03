import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Details = ({ id }) => {
    const [profile, setProfile] = useState({});
    const [isLoadProfile, setIsLoadProfile] = useState(false);

    useEffect(() => {
        (async function() {
            const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${ id }.json`);
            const json = await response.json();
            setProfile(json);
            setIsLoadProfile(true);
        }());
    }, [id]);

    if (isLoadProfile) {
        const { name, avatar, details: { city, company, position } } = profile;

        return (
            <div>
                <img src={ avatar } alt={ name } />
                <ul>
                    <li>{ name }</li>
                    <li>City: { city }</li>
                    <li>Company: { company }</li>
                    <li>Position: { position }</li>
                </ul>
            </div>
        );
    }

    return null;
};

Details.propTypes = {
    props: PropTypes.shape({
        id: PropTypes.number
    })
};

export default Details;

