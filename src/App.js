import React, { useEffect, useState } from 'react'
import './Home.scss'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)
    const [github_src, setGithubSrc] = useState('/github_dark.webp')


    const monkes = [
        'https://i.imgur.com/LV7NUKd.jpg',
        'https://i.imgur.com/8CGJNqc.jpg',
        'https://i.imgur.com/BYepVRx.jpg',
        'https://i.imgur.com/feJr7O7.jpg',
    ]

    useEffect(() => {
        if (darkMode) {
            setGithubSrc('https://i.imgur.com/AwgrBOi.png')
        } else {
            setGithubSrc('https://i.imgur.com/qkgfyLX.png')
        }
    }, [darkMode])

    return (
        <div className={darkMode ? 'container_dark' : 'container_bright'}>
            <DarkModeSwitch
                style={{ marginBottom: '2rem' }}
                checked={darkMode}
                onChange={setDarkMode}
                size={40}
            />

            <div className='main-div'>
                <h1>Welcome to my website kind stranger</h1>
                <h2>Stay as long as you'd like</h2>
            </div>


            <div className='social-media_container'
            >
                <a href='https://github.com/TheDokT0r'>
                    <img className='social-media_icon' src={github_src} alt='github' />
                </a>
            </div>

            <div className='monke-container'>
                <h2 className='monkes-title'>
                    I've got nothing else planned here, so here are some images of funny monkes
                </h2>

                <div >
                    {monkes.map((monke, index) => (
                        <img
                            className='monke'
                            src={monke}
                            alt={`monke ${index}`}
                        // width='300'
                        // height='300'
                        />
                    ))}
                </div>
            </div>

            <footer>There isn't really anything else in here</footer>
        </div>
    )
}
