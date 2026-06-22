import { useState } from 'react'

import dayData from '../content/cities/fukuoka/dayData'

import { getRandomMissions } from '../utils/missionUtils'

import { buildMissionPrompt } from '../utils/promptUtils'

import useAdventureStore from '../store/adventureStore'

import MissionPopup from '../components/MissionPopup'

import { useRecordStore } from '../store/recordStore'

import { fukuokaStories } from '../content/stories/fukuoka/index'

function HomePage({
  setCurrentPage
}) {

  const [selectedDay, setSelectedDay] = useState(1)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [missionsByPlace, setMissionsByPlace]
    = useState({})
  const [showDaySelector, setShowDaySelector]  = useState(false)
  const completedPlaces =
    useAdventureStore(
      (state) =>
        state.completedPlaces
    )
  const currentDay =
    dayData[selectedDay]
  const isDayCompleted =
    currentDay.places.every(
      (place) =>
        completedPlaces.includes(
          place.id
        )
    )
  const isDayUnlocked = (day) => {

    if (day === 1) {
      return true
    }

    const previousDay =
      dayData[day - 1]

    return previousDay.places.every(
      (place) =>
        completedPlaces.includes(
          place.id
        )
    )

  }
  const isDayFullyCompleted = (
    day
  ) => {

    const targetDay =
      dayData[day]

    return targetDay.places.every(
      (place) =>
        completedPlaces.includes(
          place.id
        )
    )

  }
  const startMission =
    useAdventureStore(
      (state) => state.startMission
    )

  const isPlaceCompleted =
    useAdventureStore(
      (state) =>
        state.isPlaceCompleted
    )
  
  const pendingStoryId =
    useRecordStore(
      (state) => state.pendingStoryId
    )
  const clearPendingStory =
    useRecordStore(
      (state) =>
        state.clearPendingStory
    )
  const startStory =
    useRecordStore(
      (state) =>
        state.startStory
    )
  const pendingStory =
    fukuokaStories.find(
      (story) =>
        story.id === pendingStoryId
    )

  const handleStartMission = () => {

    const selectedMissions =
      missionsByPlace[
        selectedPlace.id
      ]

    if (
      !selectedMissions ||
      selectedMissions.length === 0
    ) {
      return
    }

    startMission({
      missions: selectedMissions,
      place: selectedPlace,
    })

    const prompt =
      buildMissionPrompt(
        selectedMissions,
        selectedPlace.category
      )

    const encodedPrompt =
      encodeURIComponent(prompt)

    window.open(
      `https://chat.openai.com/?prompt=${encodedPrompt}`,
      '_blank'
    )

    setSelectedPlace(null)
  }

  return (
    
    <div
      className="app map-page"

      onClick={() => {

        setShowDaySelector(false)

        setSelectedPlace(null)

      }}
    >

      <h1 className="title">
        JellyTalk
      </h1>

      <div className="subtitle-row">

        <div className="subtitle">
          후쿠오카 편
        </div>

        <button
          className="day-button"

          onClick={(event) => {

            event.stopPropagation()

            setShowDaySelector(
              !showDaySelector
            )

          }}
        >
          {selectedDay}일차 ▼
        </button>

          {showDaySelector && (

            <div
              className="day-selector"

              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <div
                className="day-card completed"

                onClick={() => {

                  setSelectedDay(1)

                  setShowDaySelector(false)

                  setSelectedPlace(null)

                }}
              >

                <div className="day-card-title">
                  ✈️ DAY 1
                </div>

                <div className="day-card-subtitle">
                  후쿠오카 도착
                </div>

                <div className="day-card-status">
                  {
                    isDayFullyCompleted(1)

                      ? '🏁 완료'

                      : '진행 가능'
                  }
                </div>

              </div>

              <div
                className={`day-card ${
                  isDayFullyCompleted(2)

                    ? 'completed'

                    : isDayUnlocked(2)

                      ? 'available'

                      : 'locked'
                }`}

                onClick={() => {

                  if (!isDayUnlocked(2)) {
                    return
                  }

                  setSelectedDay(2)

                  setShowDaySelector(false)

                  setSelectedPlace(null)

                }}
              >

                <div className="day-card-title">
                  🌙 DAY 2
                </div>

                <div className="day-card-subtitle">
                  하카타 탐험
                </div>

                <div className="day-card-status">
                  {
                    isDayFullyCompleted(2)

                      ? '🏁 완료'

                      : isDayUnlocked(2)

                        ? '진행 가능'

                        : '🔒 잠금 상태'
                  }
                </div>

              </div>

              <div
                className={`day-card ${
                  isDayFullyCompleted(3)

                    ? 'completed'

                    : isDayUnlocked(3)

                      ? 'available'

                      : 'locked'
                }`}

                onClick={() => {

                  if (!isDayUnlocked(3)) {
                    return
                  }

                  setSelectedDay(3)

                  setShowDaySelector(false)

                  setSelectedPlace(null)

                }}
              >

                <div className="day-card-title">
                  🌙 DAY 3
                </div>

                <div className="day-card-subtitle">
                  여행 마지막 밤
                </div>

                <div className="day-card-status">
                  {
                    isDayFullyCompleted(3)

                      ? '🏁 완료'

                      : isDayUnlocked(3)

                        ? '진행 가능'

                        : '🔒 잠금 상태'
                  }
                </div>

              </div>

            </div>

          )}

        </div>
        <div
          className="map-container"

          onClick={() => setSelectedPlace(null)}
        >

          <img
            src={currentDay.map}
            alt="후쿠오카 맵"
            className="map-image"
          />

          {currentDay.places.map((place) => {

            const completed =
              isPlaceCompleted(place.id)

            return (

            <button
              key={place.id}

              className="location-button"

              style={{
                top: place.top,
                left: place.left,
                right: place.right,
              }}

              onClick={(event) => {

                event.stopPropagation()

                setSelectedPlace(place)

                const savedMissions =
                  missionsByPlace[place.id]

                if (savedMissions) {
                  return
                }

                const isDayCompleted =
                  currentDay.places.every(
                    (currentPlace) =>
                      completedPlaces.includes(
                        currentPlace.id
                      )
                  )

                const randomMissions = getRandomMissions({
                  category: place.category,
                  isDayCompleted,
                  lastMissionIds: [],
                })

                setMissionsByPlace((prev) => ({

                  ...prev,

                  [place.id]: randomMissions,

                }))

              }}
            >

              <div className="location-content">

                <span>
                  {place.name}
                </span>

                {completed && (

                  <img
                    src="/icons/paw.png"
                    alt="완료"

                    className="paw-icon"
                  />

                )}

              </div>

            </button>

          )})
          }
          {pendingStory && (

            <div className="story-popup">

              <p
                className="story-popup-label"
              >
                ✨ 특별 이벤트 발생
              </p>

              <h2
                className="story-popup-title"
              >
                {pendingStory.title}
              </h2>

              <p
                className="
                  story-popup-description
                "
              >
                {pendingStory.description}
              </p>

              <button

                className="
                  story-popup-button
                "

                onClick={() => {

                  startStory(pendingStory)

                  clearPendingStory()

                  try {

                    navigator.clipboard.writeText(
                      pendingStory.prompt
                    )

                  } catch (error) {

                    console.log(error)

                  }

                  const isMobile =

                    /Android|iPhone|iPad|iPod/i
                      .test(
                        navigator.userAgent
                      )

                  if (isMobile) {

                    window.location.href =
                      'https://chatgpt.com'

                  } else {

                    window.open(
                      'https://chatgpt.com',
                      '_blank'
                    )

                  }

                }}

              >
                스토리 시작
              </button>

            </div>

          )}

          {selectedPlace && (

            <MissionPopup

              place={selectedPlace}

              missions={
                missionsByPlace[
                  selectedPlace.id
                ]
              }

              onStart={
                handleStartMission
              }

            />

          )}

        </div>

        
    </div>
  )
}

export default HomePage