import React from 'react';

const Header = () => {

    const handleClick = (e) => {
        e.stopPropagation();
        const leaderBoard = document.querySelector('.leaderboard');
        switch (e.target.textContent) {
            case 'LEADERBOARD':
                leaderBoard.classList.toggle('active');
                break;

            case 'WHACK A MOLE!':
                leaderBoard.classList.remove('active');
                break;

            default:
                break;
        }

    };

    return (
        <div className="App-header">
            <ul>
                <li className="logo" onClick={handleClick}>WHACK A MOLE!</li>
                <li onClick={handleClick}>LEADERBOARD</li>
            </ul>
        </div>
    )
}

export default Header;