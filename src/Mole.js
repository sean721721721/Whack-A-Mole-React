import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const increaseScore = () => {
    return { type: 'INCREASE_SCORE'}
}

const Mole = () => {
    const dispatch = useDispatch();

    const handleClick = e => {
        e.stopPropagation();
        console.log(e);
        const mole = e.currentTarget;
        const hit = e.currentTarget.childNodes[0];
        mole.classList.remove('up');
        hit.classList.add('active');
        setTimeout(() => hit.classList.remove('active'), 100);
        dispatch(increaseScore());
    }
    return (
        <div className="mole" onClick={handleClick}>
            <div className="hit"></div>
        </div>
    )
}

export default Mole;