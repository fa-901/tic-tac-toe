import React, { useState } from 'react';

const GridItem = ({onClick, value}) => {
    return (
        <div className="tictac-cell" onClick={onClick}>
            {value}
        </div>
    )
}

export default GridItem;