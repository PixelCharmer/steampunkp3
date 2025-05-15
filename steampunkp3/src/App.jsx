import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Room5Intro from './rooms/Room5Intro';
import Room5 from './rooms/Room5';
import Room5Puzzle from './rooms/Room5Puzzle';
import GameExit from './rooms/GameExit';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Room5Intro />} />
                <Route path="/room5" element={<Room5 />} />
                <Route path="/room5puzzle" element={<Room5Puzzle />} />
                <Route path="/gameexit" element={<GameExit />} />
            </Routes>
        </Router>
    );
}
