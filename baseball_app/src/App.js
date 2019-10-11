import React, {useState} from 'react';
import './App.css';
import Display from './Components/Display';
import Dashboard from './Components/Dashboard';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  // const [fouls, setFouls] = useState(0);
  return (
    <div className="App">
        <h1>LOSEM</h1>
        <Display balls={balls} strikes={strikes}/>
        <Dashboard 
        balls={balls} setBalls={setBalls} 
        strikes={strikes} setStrikes={setStrikes}
        // fouls={fouls}   setFouls={setFouls}
        />
  
    </div>
  );
}

export default App;
