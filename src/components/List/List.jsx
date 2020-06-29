import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item/Item';

const List = ({ list, getDataProfile }) => {
    const items = list.map(({ id, name }) => <Item key={ id } getDataProfile={ getDataProfile } id={ id } value={ name } />)
    return (
        <ul className="list">{ items }</ul>
    );
};

List.propTypes = {
    props: PropTypes.shape({
        list: PropTypes.array.isRequired,
        getDataProfile: PropTypes.func.isRequired
    })
};

export default List;

