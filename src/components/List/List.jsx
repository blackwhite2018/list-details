import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Item from './Item/Item';

const List = ({ getDataProfile }) => {
    const [isLoadList, setIsLoadList] = useState(false);
    const [list, setList] = useState([]);

    const items = list.map(({ id, name }) => <Item key={ id } getDataProfile={ getDataProfile } id={ id } value={ name } />)

    const loadData = async url => {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    };

    useEffect(() => {
        (async function() {
            if (!isLoadList) {
                const list = await loadData('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
                setList(list);
                setIsLoadList(true);
            }
        }())
    });

    return (
        <ul className="list">{ items }</ul>
    );
};

List.propTypes = {
    props: PropTypes.shape({
        getDataProfile: PropTypes.func.isRequired
    })
};

export default List;

