import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ id, value, getDataProfile }) => {
    const handleClick = evt => {
        getDataProfile(id);
    };

    return (
        <li className="list__item" data-id={ id } onClick={ handleClick }>
            { value }
        </li>
    );
};

Item.propTypes = {
    props: PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        getDataProfile: PropTypes.func.isRequired
    })
};

export default Item;

