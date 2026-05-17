export function getUnlockedStoryIndex(
  level,
  baseLevel = 0
) {
  return Math.floor(
    (level - baseLevel) / 10
  )
}