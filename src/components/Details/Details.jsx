import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ data: { avatar, name, details: { city, company, position } } }) => {
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
};

Details.propTypes = {
    props: PropTypes({
        data: PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            details: PropTypes.shape({
                city: PropTypes.string,
                company: PropTypes.string,
                position: PropTypes.string
            })
        })
    })
};

export default Details;

