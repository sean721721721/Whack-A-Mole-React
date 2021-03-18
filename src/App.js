import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Score from './Score';
import Hole from './Hole';
import './App.scss';

const setStateToInit = () => {
  return { type: 'SET_INITIAL_STATE'};
}

const setLastHoleIndex = (holeIndex) => {
  return { type: 'SET_HOLE_INDEX', holeIndex }
}

const setStart = (boolean) => {
  return { type: 'SET_START', boolean }
}

let timeup = true;
let timeout;
// console.log(timeup);

function App() {
  const { score, holeIndex, start }= useSelector(state => state);
  console.log({ score, holeIndex, start })
  const holeCount = 6;
  // let timeup = true;
  console.log('time up: ', timeup);
  const dispatch = useDispatch();
  // console.log(timeup);
  
  let holes = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef()];
  // let holes = useRef([]);
  // holes.current = [...Array(holeCount).fill()];
  let buttonRef = useRef(null);

  const randomTime = (min, max) => {
    const time = Math.random() * (max - min) + min;
    return time;
  }

  const randomHole = (holes) => {
    const idx = Math.floor(Math.random() * holes.length);
    if (idx === holeIndex) {
      console.log('the same one');
      return randomHole(holes);
    }
    return idx;
  }

  const peep = () => {
    console.log('peep!');
    console.log(timeup);
    const time = randomTime(200, 1000);
    const index = randomHole(holes);
    const hole = holes[index].current;
    hole.classList.add('up');
    dispatch(setLastHoleIndex(index));
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeup) peep();
    }, time);
  }
  const handleClick = (e) => {
    let text = e.target.textContent;
    if (text === 'START!') {
      e.target.textContent = "STOP!";
      startGame();
      console.log('after start game')
    } else {
      e.target.textContent = "START!";
      stopGame();
    }

  }
  const startGame = () => {
    console.log('start!')
    dispatch(setStateToInit());
    timeup = false;
    peep();
    timeout = setTimeout(() => {
      console.log("time's up");
      dispatch(setStart(false));
      timeup = true;
    }, 5000);
  }

  const stopGame = () => {
    console.log('stop!');
    timeup = true;
  }

  useEffect(() => {
    console.log('useEffect');
    buttonRef.current.textContent = timeup ? "START!" : "STOP";

  })

  return (
      <div className="App">
        <header className="App-header">
          <h1>WHACK A MOLE! <Score score={score} /></h1>
        </header>
        <div className="game">
          {Array(holeCount).fill('').map((hole, index) => 
            <Hole ref={holes[index]} index={index} />
          )}
        </div>
        <button ref={buttonRef} onClick={handleClick}>{timeup ? "START!" : "STOP!"}</button>
      </div>
  );
}

export default App;
