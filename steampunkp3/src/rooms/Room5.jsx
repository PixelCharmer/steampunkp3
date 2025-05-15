import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room5.png';
import '../styles/Room5.scss';

export default function Room5() {
    const navigate = useNavigate();
    const [visibleClues, setVisibleClues] = useState({});

    const toggleClue = (id) => {
        setVisibleClues((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const clues = [
        { id: 'clue1', text: 'It was the Unveiling that began this whole journey', top: '28%', left: '22%' },
        { id: 'clue2', text: 'The disappearance began just after the steam left', top: '42%', left: '65%' },
        { id: 'clue3', text: 'A collapse caused a rift', top: '61%', left: '18%' },
        { id: 'clue4', text: 'After awakening we snapped back to reality .', top: '70%', left: '72%' }
    ];

    return (
        <div className="room5" style={{ backgroundImage: `url(${background})` }}>
            <h2>The Flux Harmonics Chamber</h2>
            <p>Search for the Professor’s final encoded timeline clues.</p>

            {clues.map(({ id, text, top, left }) => (
                <div
                    key={id}
                    className={`clue-container ${visibleClues[id] ? 'visible' : ''}`}
                    style={{ top, left }}
                    onClick={() => toggleClue(id)}
                >
                    <div className="clue-node" />
                    <span className="clue-text">{text}</span>
                </div>
            ))}

            <div className="buttons">
                <button onClick={() => navigate('/room5puzzle')}>Proceed to Final Sequence</button>
            </div>
        </div>
    );
}
