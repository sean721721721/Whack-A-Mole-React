import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const setStart = (boolean) => {
    return { type: 'SET_START', start: boolean }
}
  

const Timer = (props) => {
    const { time } = props;
    console.log('Timer time=', time);
    const [ secondsLeft, setTimeLeft] = useState(time);
    const start = useSelector(state => state.start);
    const dispatch = useDispatch();
    console.log('secondsLeft: ', secondsLeft)
    useEffect(() => {
        // console.log('secondsLeft: ', secondsLeft);
        if (!secondsLeft) {
            dispatch(setStart(false));
            return;
        }
        console.log('useEffect');
        let countDown = setTimeout(() => {
            // console.log('secondsLeft in setInterval: ', secondsLeft);
            setTimeLeft(secondsLeft => secondsLeft - 1);
        }, 1000);
        return () => clearInterval(countDown);
    }, [secondsLeft]);

    return (
        <span>{start ? `${secondsLeft}`: ' '}</span>
    )
}

export default Timer;