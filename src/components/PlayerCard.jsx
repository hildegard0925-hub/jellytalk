import ExpBar
from './ExpBar'

import LevelBadge
from './LevelBadge'

function PlayerCard({

  level,

  totalExp,

}) {

  const currentExp =
    totalExp % 100

  return (

    <div className="player-card">

      <LevelBadge
        level={level}
      />

      <ExpBar
        currentExp={currentExp}
      />

      <div className="total-exp">
        총 EXP {totalExp}
      </div>

    </div>

  )

}

export default PlayerCard