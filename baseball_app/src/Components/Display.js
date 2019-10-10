import React from 'react';

function Display(props){
    const {balls, strikes} = props;
 
    return (
        <div className="counterContainer">
            <div className="ballContainer">
                <div className="balls">Balls</div>
                <div>{balls}</div>
            </div>
            <div className="ballContainer">
                <div className="strikes">Strikes</div>
                <div>{strikes}</div>
            </div>
        </div>
    )
}

export default Display;