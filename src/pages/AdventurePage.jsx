import useAdventureStore from '../store/adventureStore'

import PlayerCard from '../components/PlayerCard'

import TimerModal from '../components/TimerModal'

import '../styles/adventure.css'

import heart1 from '../assets/ui/heart1.png'

import heart2 from '../assets/ui/heart2.png'

import heart3 from '../assets/ui/heart3.png'

import heart4 from '../assets/ui/heart4.png'

import heart5 from '../assets/ui/heart5.png'

import heart6 from '../assets/ui/heart6.png'

import heart7 from '../assets/ui/heart7.png'

import { getUnlockedStoryIndex } from "../utils/storyUtils"


function AdventurePage() {

  const {

    level,

    totalExp,

    streak,

    claimableMission,

    recentCompletedMissions,

    claimMissionReward,

    completeMission,

  } = useAdventureStore()

  const heartImages = [

    heart1,

    heart2,

    heart3,

    heart4,

    heart5,

    heart6,

    heart7,
  ]
  const unlockedStoryIndex =
    getUnlockedStoryIndex(level)

  const currentHeartImage =

    streak > 0

      ? heartImages[
          Math.min(
            streak - 1,
            6
          )
        ]

      : null

  const activeMission =
    useAdventureStore(
      (state) => state.activeMission
    )

  const remainingSeconds =
    activeMission
      ?.remainingSeconds ?? 0

  const minutes =
    Math.floor(
      remainingSeconds / 60
    )

  const seconds =
    remainingSeconds % 60

  const formattedTime =
    `${minutes}:${
      String(seconds)
        .padStart(2, '0')
    }`

  return (

    <div className="adventure-page">

      {/* 플레이어 카드 */}
      <PlayerCard

        level={level}

        totalExp={totalExp}

      />

      {/* 진행 중 미션 */}
      <div className="mission-section">

        <h3>
          진행 중 미션
        </h3>

        {activeMission && (

          <div className="mission-card">

            <div>
              [{activeMission.place.name}]
            </div>

            <div className="mission-list">

              {activeMission.missions.map(
                (mission) => (

                  <div
                    key={mission.id}

                    className="active-mission-item"
                  >

                    • {mission.text}

                  </div>

                )
              )}

            </div>

            <div>
              ⏱ {formattedTime}
            </div>

          </div>

        )}

        {!activeMission &&
          claimableMission && (

          <div className="mission-card">

            <div>
              [{claimableMission.place.name}]
            </div>

            <div className="mission-list">

              {claimableMission.missions.map(
                (mission) => (

                  <div
                    key={mission.id}

                    className="active-mission-item"
                  >

                    • {mission.text}

                  </div>

                )
              )}

            </div>

            <button
              className="claim-button"

              onClick={
                claimMissionReward
              }
            >
              EXP 받기
            </button>

          </div>

        )}

        {!activeMission &&
          !claimableMission && (

          <div className="empty-text">
            진행 중인 미션 없음
          </div>

        )}

      </div>

      {/* 연속 학습 */}
      <div className="streak-section">

        <h3>
          연속 학습
        </h3>

        <div className="heart-row">

          {

            currentHeartImage && (

              <img

                src={currentHeartImage}

                alt="streak"

                className="streak-heart"

              />

            )

          }

        </div>

      </div>

      {/* 최근 완료 */}
      <div className="recent-section">

        <h3>
          최근 완료
        </h3>

        {recentCompletedMissions
          .length === 0 && (

          <div className="empty-text">
            아직 완료한 미션 없음
          </div>

        )}

        {recentCompletedMissions
          .slice(0, 3)
          .map((mission) => (

          <div
            key={mission.id}

            className="recent-item"
          >

            [{mission.placeName}]
            {' '}
            {mission.missionText}
            {' '}
            +{mission.exp}

          </div>

        ))}

      </div>

    </div>

  )

}

export default AdventurePage