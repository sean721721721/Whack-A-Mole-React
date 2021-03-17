import React from 'react';


const Score = props => {
    const { score } = props
    return (
        <span className="score">{score}</span>
    )
}

export default Score;