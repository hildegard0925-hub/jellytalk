import strawberry1 from '../assets/ui/strawberry1.png'

import strawberry2 from '../assets/ui/strawberry2.png'

import strawberry3 from '../assets/ui/strawberry3.png'

import strawberry4 from '../assets/ui/strawberry4.png'

import strawberry5 from '../assets/ui/strawberry5.png'

import strawberry6 from '../assets/ui/strawberry6.png'

import strawberry7 from '../assets/ui/strawberry7.png'

import strawberry8 from '../assets/ui/strawberry8.png'

import strawberry9 from '../assets/ui/strawberry9.png'

import strawberry10 from '../assets/ui/strawberry10.png'

function LevelBadge({

  level,

}) {

  const strawberryIcons = [

    strawberry1,

    strawberry2,

    strawberry3,

    strawberry4,

    strawberry5,

    strawberry6,

    strawberry7,

    strawberry8,

    strawberry9,

    strawberry10,
  ]

  const strawberryTier =

    Math.floor(level / 10)

  const currentStrawberry =

    strawberryTier > 0

      ? strawberryIcons[
          (strawberryTier - 1) % 10
        ]

      : null

  return (

    <div className="level-row">

      <img

        src={currentStrawberry}

        alt="strawberry"

        className={

          currentStrawberry

            ? 'level-strawberry'

            : 'level-strawberry hidden'
        }

      />

      <div className="level-title">

        LV {level}

      </div>

    </div>

  )

}

export default LevelBadge