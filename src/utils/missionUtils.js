import missionPools from '../content/cities/fukuoka/missions/missionPools'

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

function filterNormalMissions(missions) {
  return missions.filter(
    (mission) => mission.difficulty !== 'special'
  )
}

function filterSpecialMissions(missions) {
  return missions.filter(
    (mission) => mission.difficulty === 'special'
  )
}

export function canSpawnSpecial(isDayCompleted) {
  return isDayCompleted
}

export function getMissionExp(mission, isFirstClear) {
  if (mission.difficulty === 'special') {
    return mission.exp
  }

  if (isFirstClear) {
    return mission.exp
  }

  return Math.floor(mission.exp / 2)
}

export function getRandomMissions({
  category,
  isDayCompleted = false,
  lastMissionIds = [],
}) {
  const missions = missionPools[category]

  if (!missions || missions.length === 0) {
    return []
  }

  const filteredMissions = missions.filter(
    (mission) => !lastMissionIds.includes(mission.id)
  )

  const normalMissions = filterNormalMissions(filteredMissions)

  const specialMissions = filterSpecialMissions(filteredMissions)

  const randomNormal = shuffleArray(normalMissions)

  const result = []

  // 일반 미션 2개 먼저 추가
  result.push(...randomNormal.slice(0, 2))

  // 스페셜 등장 조건
  const canSpecialAppear =
    canSpawnSpecial(isDayCompleted) &&
    Math.random() < 0.05 &&
    specialMissions.length > 0

  if (canSpecialAppear) {
    const randomSpecial =
      shuffleArray(specialMissions)[0]

    result.push(randomSpecial)
  } else {
    const extraNormal = randomNormal.slice(2, 3)

    result.push(...extraNormal)
  }

  return shuffleArray(result)
}