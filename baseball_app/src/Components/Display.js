import React from 'react';

function Display(props){
    const {balls, strikes, fouls, hit} = props;
 
    return (
        <div className="counterContainer">
            <div className="ballContainer">
                <div className="balls">Balls</div>
                <div>{balls}</div>
            </div>

             <div className="strikeContainer">
                <div className="strikes">Strikes</div>
                <div>{strikes}</div>
            </div>

              {/* <div className="strikeContainer">
                <div className="fouls">Fouls</div>
                <div>{fouls}</div>
            </div> */}
        </div>
    )
}

export default Display;