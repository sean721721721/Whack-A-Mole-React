import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const setStart = (boolean) => {
    return { type: 'SET_START', start: boolean }
}
  

const Timer = (props) => {
    const { time } = props;
    const [ secondsLeft, setTimeLeft] = useState(time);
    const { start, score } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!secondsLeft) {
            document.querySelector('.name-input-div').classList.toggle('active');
            dispatch(setStart(false));
            return;
        }
        let countDown = setTimeout(() => {
            setTimeLeft(secondsLeft => secondsLeft - 1);
        }, 1000);
        return () => clearInterval(countDown);
    }, [secondsLeft]);

    return (
        <span>{start ? `${secondsLeft}`: ' '}</span>
    )
}

export default Timer;