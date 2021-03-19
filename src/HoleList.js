import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Hole from './Hole';

const setLastHoleIndex = (holeIndex) => {
    return { type: 'SET_HOLE_INDEX', holeIndex }
}

const HoleList = () => {
    const holes = [
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef()
    ];

    const { start, holeIndex }= useSelector(state => state);
    const dispatch = useDispatch(); 
    const holeCount = 6;

    const randomTime = (min, max) => {
        const time = Math.random() * (max - min) + min;
        return time;
      }
    
    const randomHole = (holes) => {
        const idx = Math.floor(Math.random() * holes.length);
        if (idx === holeIndex) {
            return randomHole(holes);
        }
        return idx;
    }

    const peep = () => {
        const time = randomTime(200, 1000);
        const index = randomHole(holes);
        const hole = holes[index].current;
        hole.classList.add('up');    
        setTimeout(() => {
          hole.classList.remove('up');
          dispatch(setLastHoleIndex(index));
        }, time);
    }

    useEffect(() => {
        if (start) {
            peep();
        }
    }, [holeIndex, start]);

    return (
        <div className='hole-list'>
            {Array(holeCount).fill('').map((hole, index) => 
                <Hole ref={holes[index]} key={index} index={index} />
            )}
        </div>
    )
}

export default HoleList;