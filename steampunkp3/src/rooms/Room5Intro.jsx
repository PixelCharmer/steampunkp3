import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room5intro.png';
import '../styles/Room5Intro.scss';

export default function Room5Intro() {
    const navigate = useNavigate();

    return (
        <div className="room5intro" style={{ backgroundImage: `url(${background})` }}>
            <div className="intro-content">
                <p>
                    You ascend into the final chamber, it is a vast, cathedral-like observatory embedded within the time machine itself. A glowing Temporal Core spins suspended above you, radiating unstable energy in pulses. Walkways spiral upward around it like the threads of a loom. The machine is on the brink of collapse-or rebirth.
                    <br />
                    <br />  
                    Fragments of the Professor's voice flicker across broken intercoms. Data logs display timelines fraying, moments unraveling.
                    <br />
                    <br />  
                    He's trapped in a quantum limbo and only a full reactivation of the core can retrieve him.
                    <br />
                    <br />  
                    To escape, you must restore the core using all knowledge gained in prior rooms. Input the correct temporal sequence. Align the planetary locks. And above all don't hesitate. Time won't wait.
                    <br />
                    <br />  
                    "My soul is split across moments. Stitch them together, or lose me to eternity. You are my final invention... make me whole."

                </p>
                <button onClick={() => navigate('/room5')}>Enter The Observatory</button>
            </div>
        </div>
    );
}