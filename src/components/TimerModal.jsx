function TimerModal({

  activeMission,

}) {
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

  )

}

export default TimerModal