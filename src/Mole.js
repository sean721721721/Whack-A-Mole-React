import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const increaseScore = () => {
    return { type: 'INCREASE_SCORE'}
}

const Mole = () => {
    const dispatch = useDispatch();

    const handleClick = e => {
        console.log(e);
        dispatch(increaseScore());
    }
    return (
        <div className="mole" onClick={handleClick}>
        </div>
    )
}

export default Mole;