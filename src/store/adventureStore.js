import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useRecordStore } from './recordStore'
import { fukuokaStories } from '../content/stories/fukuoka'

const LEVEL_EXP = 100

const useAdventureStore = create(

  persist(

    (set, get) => ({

  // ========================
  // PLAYER
  // ========================

  totalExp: 0,

  level: 1,

  streak: 0,

  lastStreakDate: null,

  // ========================
  // MISSION STATE
  // ========================

  activeMission: null,

  claimableMission: null,

  // ========================
  // PROGRESS
  // ========================

  completedPlaces: [],

  recentCompletedMissions: [],

  // ========================
  // EXP
  // ========================

  addExp: (amount) => {

    const currentExp =
      get().totalExp

    const newTotalExp =
      currentExp + amount

    const newLevel =
      Math.floor(newTotalExp / LEVEL_EXP) + 1

    set({

      totalExp: newTotalExp,

      level: newLevel,
    })

  },

  // ========================
  // START MISSION
  // ========================

  startMission: ({
    missions,
    place,
  }) => {

    set({

      activeMission: {

        missions,

        place,

        remainingSeconds: 1800,

        isRunning: true,
      },

      claimableMission: null,
    })

  },

  // ========================
  // CANCEL MISSION
  // ========================

  cancelMission: () => {

    set({

      activeMission: null,
    })

  },

  // ========================
  // COMPLETE MISSION
  // ========================

  completeMission: () => {

    const activeMission =
      get().activeMission

    if (!activeMission) {
      return
    }

    set({

      activeMission: null,

      claimableMission: {

        ...activeMission,

        completedAt: Date.now(),
      },
    })

  },

  // ========================
  // CLAIM EXP
  // ========================

  claimMissionReward: () => {

    const claimableMission =
      get().claimableMission

    if (!claimableMission) {
      return
    }

    const {
      missions,
      place,
    } = claimableMission

    const completedPlaces =
      get().completedPlaces

    const isFirstClear =
      !completedPlaces.includes(place.id)

    const totalMissionExp =
      missions.reduce(

        (sum, mission) => {

          if (isFirstClear) {
            return sum + mission.exp
          }

          if (
            mission.difficulty ===
            'special'
          ) {
            return sum + mission.exp
          }

          return (
            sum +
            Math.floor(
              mission.exp / 2
            )
          )

        },

        0
      )

    const previousLevel =
      get().level

    // EXP 추가
    get().addExp(totalMissionExp)

    const currentLevel =
      get().level

    const recordStore =
      useRecordStore.getState()

    const completedStories =

      recordStore
        .cityStoryProgress
        .fukuoka
        .completedStories

    const activeStories =
      recordStore.activeStories

    const hasPendingStory =
      recordStore.pendingStoryId

    if (!hasPendingStory) {

      const unlockedStory =

        fukuokaStories.find(
          (story) => {

            const alreadyCompleted =

              completedStories.includes(
                story.id
              )

            const alreadyActive =

              activeStories.some(
                (activeStory) =>

                  activeStory.id ===
                  story.id
              )

            return (

              previousLevel <
                story.unlockLevel

              &&

              currentLevel >=
                story.unlockLevel

              &&

              !alreadyCompleted

              &&

              !alreadyActive

            )

          }
        )

      if (unlockedStory) {

        recordStore.setPendingStory(
          unlockedStory.id
        )

      }

    }

    // 장소 최초 완료 체크
    const updatedCompletedPlaces =
      isFirstClear

        ? [
            ...completedPlaces,
            place.id,
          ]

        : completedPlaces

    // 최근 완료 미션
    const newRecentMission = {

      id:
        `${place.id}-${Date.now()}`,

      placeName: place.name,

      missionText:
        `${missions.length}개 미션 완료`,

      exp: totalMissionExp,
    }

    const updatedRecentMissions = [

      newRecentMission,

      ...get().recentCompletedMissions,

    ]
    const today =

      new Date()
        .toLocaleDateString()

    const shouldIncreaseStreak =

      get().lastStreakDate !== today

    set({

      completedPlaces:
        updatedCompletedPlaces,

      recentCompletedMissions:
        updatedRecentMissions,

      streak:

        shouldIncreaseStreak

          ? (

              get().streak >= 7

                ? 1

                : get().streak + 1

            )

          : get().streak,

      lastStreakDate:

        shouldIncreaseStreak

          ? today

          : get().lastStreakDate,

      claimableMission: null,
    })

  },
  // ========================
  // TIMER
  // ========================

  tickMissionTimer: () => {

    const activeMission =
      get().activeMission

    if (
      !activeMission ||
      !activeMission.isRunning
    ) {
      return
    }

    const nextSeconds =
      activeMission.remainingSeconds - 1

    if (nextSeconds <= 0) {

      get().completeMission()

      return
    }

    set({

      activeMission: {

        ...activeMission,

        remainingSeconds:
          nextSeconds,
      },
    })

  },

  pauseMissionTimer: () => {

    const activeMission =
      get().activeMission

    if (!activeMission) {
      return
    }

    set({

      activeMission: {

        ...activeMission,

        isRunning: false,
      },
    })

  },

  resumeMissionTimer: () => {

    const activeMission =
      get().activeMission

    if (!activeMission) {
      return
    }

    set({

      activeMission: {

        ...activeMission,

        isRunning: true,
      },
    })

  },
  // ========================
  // CHECK
  // ========================

  isPlaceCompleted: (placeId) => {

    return get()
      .completedPlaces
      .includes(placeId)

  },

  isMissionActive: () => {

    return !!get().activeMission

  },

  isMissionClaimable: () => {

    return !!get().claimableMission

  },
  resetAdventure: () => {

    set({

      totalExp: 0,

      level: 1,

      streak: 0,

      lastStreakDate: null,

      activeMission: null,

      claimableMission: null,

      completedPlaces: [],

      recentCompletedMissions: [],
    })

  },

    }),

    {

      name: 'jellytalk-adventure',

    }

  )

)

export default useAdventureStore