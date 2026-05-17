function MissionPopup({

  place,

  missions,

  onStart,

}) {

  return (

    <div
      className="mission-popup"

      onClick={(event) =>
        event.stopPropagation()
      }
    >

      <div className="mission-title">
        {place.name}
      </div>

      {missions?.map((mission) => (

        <div
          key={mission.id}

          className="mission-info"
        >

          <div className="mission-row">

            <img
              src={`/icons/difficulty/${mission.difficulty}.png`}
              alt={mission.difficulty}

              className="difficulty-icon"
            />

            <div className="mission-text">

              {mission.text}

              {' '}

              (+{mission.exp} EXP)

            </div>

          </div>

        </div>

      ))}

      <button
        className="start-button"

        onClick={onStart}
      >
        미션 시작
      </button>

    </div>

  )

}

export default MissionPopup