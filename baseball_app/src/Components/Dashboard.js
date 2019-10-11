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
         handleAlert();
    }

    const handleAlert = () => {
        alert('GAME OVER')
    }
    return (
        <div className="buttonContainer">
            <button className="btnBall" onClick={() => handleBalls()}>Balls</button>
            <button className="btnStrikes" onClick={() => handleStrikes()}>Strikes</button>
            <button className="btnFouls" onClick={() => handleFouls()}>Fouls</button>
            <button className="btnHit" onClick={() => handleHits()}>Hit</button>
            <button className="btnReset" onClick={() => handleReset()}>Reset</button>
        </div>
    )
}

export default Dashboard;