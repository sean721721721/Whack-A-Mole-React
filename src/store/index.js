import { createStore } from 'redux';

const INITIAL_STATE = {
  score: 0,
  holeIndex: 0,
  start: false,
}

function tasks(state = INITIAL_STATE, action) {
    // console.log('current state: ', state);
    // console.log('Action: ', action);
  switch (action.type) {
    case 'INCREASE_SCORE':
		return {
			...state,
			score: state.score + 1
        }

	case 'SET_HOLE_INDEX':
		return {
			...state,
			holeIndex: action.holeIndex
        }

    case 'SET_START':
        return {
            ...state,
			start: action.start
        }

    case 'SET_INITIAL_STATE':
        return INITIAL_STATE;
	default:
		return state;
  }
}

const store = createStore(tasks);

export default store;