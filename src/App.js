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

let timeup = true;
console.log(timeup);

function App() {
  const { score, holeIndex }= useSelector(state => state);
  console.log({ score, holeIndex })
  const holeCount = 6;
  let timeout;
  const dispatch = useDispatch();
  console.log(timeup);
  
  let holes = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef()];
  // let holes = useRef([]);
  // holes.current = [...Array(holeCount).fill()];

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
    const time = randomTime(200, 1000);
    const index = randomHole(holes);
    const hole = holes[index].current;
    hole.classList.add('up');
    dispatch(setLastHoleIndex(holeIndex));
    console.log('set hole index completed')
    setTimeout(() => {
      hole.classList.remove('up');
      console.log('timeUp in peep(): ', timeup);
      if (!timeup) peep();
    }, time);
  }
  const handleClick = (e) => {
    let text = e.target.textContent;
    if (text === 'Start!') {
      e.target.textContent = "Stop!";
      startGame();
    } else {
      console.log('stop!')
      e.target.textContent = "Start!";
      stopGame();
    }

  }
  const startGame = () => {
    console.log('start!')
    console.log('set init');
    dispatch(setStateToInit());
    timeup = false;
    peep();
    timeout = setTimeout(() => {
      console.log("time's up");
      timeup = true
    }, 10000);
  }

  const stopGame = () => {
    console.log('stop!');
    timeup = true;
    clearTimeout(timeout);
  }

  useEffect(() => {
    console.log('userEffect');
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
        <button onClick={handleClick}>{timeup ? "Start!" : "Stop!"}</button>
      </div>
  );
}

export default App;
