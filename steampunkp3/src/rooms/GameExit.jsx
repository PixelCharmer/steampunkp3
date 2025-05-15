import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/gameexit.png';
import '../styles/GameExit.scss';

export default function GameStart() {
    const navigate = useNavigate();

    return (
        <div
            className="game-exit"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="intro-box">
                <h1>The Professor's Farewell</h1>
                <p>
                    The Temporal Core stabilizes, and from the light, the Professor's image flickers into view - whole at last.
                    <br />
                    <br />  
                    "You've done what I could not. My invention lives... because of you."
                    <br />
                    <br />  
                    The sealed workshop hums to life. Systems realign. Doors unlock.
                    <br />
                    <br />  
                    "Time was never mine to master, it was ours to understand. Take what you've learned and dream beyond my limits."
                    <br />
                    <br />  
                    With a final smile, the Professor fades into a soft blue light. The elevator descends, glowing with newfound energy.
                    <br />
                    <br />  
                    You didn't just escape. You unlocked a legacy.
                    <br />
                    <br /> 
                    Created and Coded by Kari Alcoset
                </p>
                <button onClick={() => navigate('/')}>Replay</button>
            </div>
        </div>
    );
}
