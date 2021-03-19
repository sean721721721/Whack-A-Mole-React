import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const setStart = (boolean) => {
    return { type: 'SET_START', start: boolean }
}

const Input = () => {
    const { score } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = e.target.querySelector('input').value;
        const userDatas = JSON.parse(localStorage.getItem('userData')) || [];
        userDatas.push({ id, score });
        localStorage.setItem('userData', JSON.stringify(userDatas));
        
        e.target.reset();
        document.querySelector('.name-input-div').classList.toggle('active');
        dispatch(setStart(false));
        document.querySelector('.leaderboard').classList.toggle('active');
    }

    return(
        <div className="name-input-div">
            <span>Your Name</span>
            <form onSubmit={handleSubmit}>
                <input type="text"/>
            </form>
        </div>
    )
}

export default Input;