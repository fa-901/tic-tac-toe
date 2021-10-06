import React from 'react';

const GridItem = ({ onClick, value, isDisabled }) => {
    let disabled = (value || isDisabled) ? 'cursor-not-allowed' : 'cursor-pointer';
    return (
        <div className={`tictac-cell ${disabled}`} onClick={() => { !(value || isDisabled) && onClick() }}>
            {value}
        </div>
    )
}

export default GridItem;