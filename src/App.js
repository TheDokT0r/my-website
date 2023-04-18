import React, { useEffect, useState } from 'react';
import './index.scss';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import MonkesContainer from './components/MonkesContainer';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [githubSrc, setGithubSrc] = useState('https://i.imgur.com/qkgfyLX.png');
    const monkes = [
        'https://i.imgur.com/LV7NUKd.jpg',
        'https://i.imgur.com/8CGJNqc.jpg',
        'https://i.imgur.com/BYepVRx.jpg',
        'https://i.imgur.com/feJr7O7.jpg',
    ];

    useEffect(() => {
        const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        if (storedDarkMode !== null) {
            setDarkMode(storedDarkMode);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            setGithubSrc('https://i.imgur.com/AwgrBOi.png');
        } else {
            setGithubSrc('https://i.imgur.com/qkgfyLX.png');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <div className={darkMode ? 'container_dark' : 'container_bright'}>
            <DarkModeSwitch
                style={{ marginBottom: '2rem' }}
                checked={darkMode}
                onChange={setDarkMode}
                size={40}
            />
            <div className="main-div">
                <h1>Welcome to my website kind stranger</h1>
                <h2>Stay as long as you&apos;d like</h2>
            </div>

            <div className="social-media_container">
                <a href="https://github.com/TheDokT0r">
                    <img className="social-media_icon" src={githubSrc} alt="github" />
                </a>
            </div>

            <MonkesContainer monkes={monkes} />

            <footer>There isn&apos;t really anything else in here</footer>
        </div>
    );
}
