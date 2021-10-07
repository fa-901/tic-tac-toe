import React from 'react';
import X from '../images/x.svg';
import O from '../images/o.svg';

const GridItem = ({ onClick, value, isDisabled }) => {
    let disabled = (value || isDisabled) ? 'cursor-not-allowed' : 'cursor-pointer';
    const image = <img className='p-4' src={value === 'X' ? X : O} alt="" />;
    return (
        <div className={`tictac-cell ${disabled}`} onClick={() => { !(value || isDisabled) && onClick() }}>
            {value && image}
        </div>
    )
}

export default GridItem;