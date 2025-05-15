import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Room5Puzzle.scss';
import timelineTable from '../assets/room5/timeline_table.png';
import plaque1 from '../assets/room5/Awakening.png';
import plaque2 from '../assets/room5/Steam.png';
import plaque3 from '../assets/room5/Collapse.png';
import plaque4 from '../assets/room5/Unveiling.png';
import plaque5 from '../assets/room5/Rift.png';
import plaque6 from '../assets/room5/Disappearance.png';

const correctOrder = [
    'Unveiling',
    'Steam',
    'Disappearance',
    'Collapse',
    'Rift',
    'Awakening'
];

const plaques = [
    { id: 'Awakening', src: plaque1 },
    { id: 'Steam', src: plaque2 },
    { id: 'Collapse', src: plaque3 },
    { id: 'Unveiling', src: plaque4 },
    { id: 'Rift', src: plaque5 },
    { id: 'Disappearance', src: plaque6 },
];

export default function Room5Puzzle() {
    const navigate = useNavigate();
    const [timelineSlots, setTimelineSlots] = useState(Array(6).fill(null));
    const [dragging, setDragging] = useState(null);

    const handleDrop = (index) => {
        if (dragging !== null) {
            const updated = [...timelineSlots];
            updated[index] = dragging;
            setTimelineSlots(updated);
            setDragging(null);
        }
    };

    const handleSubmit = () => {
        const isCorrect = timelineSlots.every((item, index) => item === correctOrder[index]);
        if (isCorrect) {
            navigate('/gameexit');
        }
    };

    const handleReset = () => {
        setTimelineSlots(Array(6).fill(null));
    };

    const handleBack = () => {
        navigate('/room5');
    };

    return (
        <div className="room5-container">
            <img src={timelineTable} alt="Timeline Table" className="timeline-table" />
            <div className="dropzones">
                {timelineSlots.map((slot, idx) => (
                    <div
                        key={idx}
                        className="dropzone"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleDrop(idx)}
                    >
                        {slot && <img src={plaques.find(p => p.id === slot).src} alt={slot} draggable={false} />}
                    </div>
                ))}
            </div>
            <div className="plaque-pool">
                {plaques.map(plaque => (
                    !timelineSlots.includes(plaque.id) &&
                    <img
                        key={plaque.id}
                        src={plaque.src}
                        alt={plaque.id}
                        draggable
                        onDragStart={() => setDragging(plaque.id)}
                        className="draggable-plaque"
                    />
                ))}
            </div>
            <div className="controls">
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleBack}>Back to Clues</button>
            </div>
        </div>
    );
}
