import {
  useEffect,
  useState,
} from 'react'

import "./styles/app.css";
import "./styles/map.css";
import "./styles/mission.css";
import "./styles/word.css";
import HomePage from './pages/HomePage'

import AdventurePage from './pages/AdventurePage'

import RecordPage from './pages/RecordPage'

import WordPage from './pages/WordPage'

import SettingsPage from './pages/SettingsPage'

import useAdventureStore from './store/adventureStore'

function App() {

  const [currentPage, setCurrentPage]
    = useState('home')

  const [currentTime, setCurrentTime]
    = useState(Date.now())

  const {

    activeMission,

    claimableMission,

    tickMissionTimer,

    } = useAdventureStore()

    useEffect(() => {

    const timer = setInterval(() => {

        setCurrentTime(Date.now())

        tickMissionTimer()

    }, 1000)

    return () => {

        clearInterval(timer)

    }

    }, [tickMissionTimer])

  return (

    <div className="app">

        {currentPage === 'home' && (

        <HomePage
            setCurrentPage={setCurrentPage}
        />

        )}

        {currentPage === 'adventure' && (

        <AdventurePage />

        )}

        {currentPage === 'settings' && (

        <SettingsPage />

        )}

        {currentPage === 'record' && (

            <RecordPage />

            )}

        {currentPage === 'word' && (

        <WordPage />

        )}

        <div className="bottom-menu">

        <div

            className={`menu-item ${
            currentPage === 'home'
                ? 'active'
                : ''
            }`}

            onClick={() =>
            setCurrentPage('home')
            }
        >

            <img
            src="/icons/map.png"
            alt="map"
            className="menu-icon"
            />

            <div className="menu-label">
            지도
            </div>

        </div>

        <div

            className={`menu-item ${
            currentPage === 'adventure'
                ? 'active'
                : ''
            }`}

            onClick={() =>
            setCurrentPage('adventure')
            }
        >

            <img

            src={
                claimableMission

                ? '/icons/adventure_complete.png'

                : activeMission

                ? '/icons/adventure_active.png'

                : '/icons/adventure.png'
            }

            alt="adventure"

            className="menu-icon"
            />

            <div className="menu-label">
            모험
            </div>

        </div>

        <div

            className={`menu-item ${
                currentPage === 'record'
                ? 'active'
                : ''
            }`}

            onClick={() =>
                setCurrentPage('record')
            }
            >

            <img
            src="/icons/record.png"
            alt="record"
            className="menu-icon"
            />

            <div className="menu-label">
            기록
            </div>

        </div>

        <div

            className={`menu-item ${
                currentPage === 'word'
                ? 'active'
                : ''
            }`}

            onClick={() =>
                setCurrentPage('word')
            }
            >

            <img
            src="/icons/word.png"
            alt="word"
            className="menu-icon"
            />

            <div className="menu-label">
            단어
            </div>

        </div>

        <div

            className={`menu-item ${
            currentPage === 'settings'
                ? 'active'
                : ''
            }`}

            onClick={() =>
            setCurrentPage('settings')
            }
        >

            <img
            src="/icons/settings.png"
            alt="settings"
            className="menu-icon"
            />

            <div className="menu-label">
            설정
            </div>

        </div>

        </div>

        </div>

        )


    }

export default App