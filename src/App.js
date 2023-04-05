import React, { useEffect, useState } from 'react'
import './Home.scss'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)
    const [github_src, setGithubSrc] = useState('/github_dark.webp')

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


            <div className='social-media_container'>
                <a href='https://github.com/TheDokT0r'>
                    <img className='social-media_icon' src={github_src} alt='github' />
                </a>
            </div>

            <footer>There isn't really anything else in here</footer>
        </div>
    )
}
