import React from 'react';


function Dashboard(props) {
    const { balls, setBalls, strikes, setStrikes, fouls, setFouls, hit, setHit } = props;

    const handleStrikes = () => {
        if (strikes === 2) {
            setStrikes(0);
            setBalls(0)
        }
        else {
            setStrikes(strikes + 1)
        }
    }

    const handleBalls = () => {
        if (balls === 3) {
            setStrikes(0);
            setBalls(0);
        }
        else {
            setBalls(balls + 1);
        }
    }

    const handleFouls = () => {
        if (strikes === 0 || strikes === 1) {
            setStrikes(strikes + 1);
        }
    }

    const handleHits = () => {
        if (strikes <= 2 || balls <= 3) {
            setStrikes(0);
            setBalls(0);
        }
    }

    const handleReset = () => {
         setStrikes(0);
         setBalls(0);
    }
    return (
        <div className="buttonContainer">
            <button onClick={() => handleBalls()}>Balls</button>
            <button onClick={() => handleStrikes()}>Strikes</button>
            <button onClick={() => handleFouls()}>Fouls</button>
            <button onClick={() => handleHits()}>Hit</button>
            <button onClick={() => handleReset()}>Reset</button>
        </div>
    )
}

export default Dashboard;