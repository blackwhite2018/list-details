import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ id, value, getDataProfile }) => {
    const handleClick = evt => {
        getDataProfile(id);
    };

    return (
        <li className="list__item">
            <button type="button" className="btn" data-id={ id } onClick={ handleClick }>{ value }</button>
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

