import React from 'react';


function Dashboard(props){
    const {balls, setBalls, strikes, setStrikes} = props;

    const handleStrikes = () => {
        if (strikes === 2) {
        setStrikes(0);
        setBalls(0)
    } 
    else 
    {
      setStrikes(strikes + 1)
    }
}

    const handleBalls = () => {
    if (balls === 3) { 
      setStrikes(0);
      setBalls(0);
    }
    else
    {
      setBalls(balls + 1);
    }
  }
    return (
        <div className="buttonContainer">
            <button onClick={() =>handleBalls()}>Balls</button>
            <button onClick={() =>handleStrikes()}>Strikes</button>
        </div>
    )
}

export default Dashboard;