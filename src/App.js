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
  return { type: 'SET_START', start: boolean }
}

let timeout;

function App() {
  const { score, holeIndex, start }= useSelector(state => state);
  // console.log({ score, holeIndex, start })
  const holeCount = 6;
  const dispatch = useDispatch();
  
  let holes = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef()];
  let buttonRef = useRef(null);

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
    console.log('peep!');
    const time = randomTime(200, 1000);
    const index = randomHole(holes);
    const hole = holes[index].current;
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      dispatch(setLastHoleIndex(index));
    }, time);
  }

  const handleClick = (e) => {
    let text = e.target.textContent;
    if (text === 'START!') {
      e.target.textContent = "STOP!";
      startGame();
    } else {
      e.target.textContent = "START!";
      stopGame();
    }
  }

  const startGame = () => {
    console.log('start!')
    dispatch(setStateToInit());
  }

  const stopGame = () => {
    console.log('stop!');
    dispatch(setStart(false));
  }

  useEffect(() => {
    if (start && holeIndex === -1) {
      timeout = setTimeout(() => {
        console.log("time's up");
        dispatch(setStart(false));
      }, 10000);
      peep();
    } 
    else if (start) peep();
    else clearTimeout(timeout);
  }, [holeIndex, start]);
  
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
        <button ref={buttonRef} onClick={handleClick}>{start ? "STOP!" : "START!"}</button>
      </div>
  );
}

export default App;
