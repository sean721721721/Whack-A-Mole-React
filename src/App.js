import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Score from './Score';
import Timer from './Timer';
import HoleList from './HoleList';
import Header from './Header';
import './App.scss';
import LeaderBoard from './LeaderBoard';
import Input from './Input';

const setStateToInit = () => {
  return { type: 'SET_INITIAL_STATE'};
}

const setStart = (boolean) => {
  return { type: 'SET_START', start: boolean }
}

function App() {
  const { score, start }= useSelector(state => state);
  const totalSeconds = 10;
  const dispatch = useDispatch();
  
  let buttonRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
    let text = e.target.textContent;
    if (text === 'START!') {
      e.target.textContent = "STOP!";
      startGame();
    } else {
      e.target.textContent = "START!";
      stopGame();
    }
  }

  const hideOtherPages = (e) => {
    const otherPages = [...e.target.querySelectorAll('.leaderboard')];
    otherPages.map(page => {
      page.classList.remove('active');
    })
  }

  const startGame = () => {
    console.log('start!')
    dispatch(setStateToInit());
  }

  const stopGame = () => {
    console.log('stop!');
    dispatch(setStart(false));
  }

  return (
      <div className="App" onClick={hideOtherPages}>
        <Header/>
        <div className="game">
          <div className="game-info">
            <div className="timer-div">
              {start ? <Timer time={totalSeconds}/> : ''}
            </div>
            <div className="score-div">
              <Score score={score} />
            </div>
          </div>
          <HoleList/>
          <button ref={buttonRef} onClick={handleClick}>{start ? "STOP!" : "START!"}</button>
        </div>
        <LeaderBoard/>
        <Input/>
      </div>
  );
}

export default App;
