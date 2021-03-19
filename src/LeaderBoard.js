import React from 'react';

const LeaderBoard = () => {
    const userDatas = JSON.parse(localStorage.getItem('userData')) || [];
    return (
        <div className="leaderboard">
            <header><h1>LEADERBOARD</h1></header>
                <div>
                    <div>Rank</div>
                    <div>Name</div>
                    <div>Score</div>
                </div>
                <hr/>
                {userDatas.sort((a, b) => b.score - a.score)
                    .map((data, index) => {
                        return (
                            <div key={`${index}${data.id}${data.index}`}>
                                <div>{index + 1}</div>
                                <div>{data.id}</div>
                                <div>{data.score}</div>
                            </div>
                        )
                })}
        </div>
    )
}

export default LeaderBoard;