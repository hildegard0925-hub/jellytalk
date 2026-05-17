import { create } from "zustand"

import { persist } from "zustand/middleware"

export const useRecordStore =

  create(

    persist(

      (set) => ({

    cityStoryProgress: {

      fukuoka: {

        baseLevel: 0,

        completedStories: []

      }

    },

    activeStories: [],
    storyNotes: {},

    pendingStoryId: null,

    startStory: (story) =>

        set((state) => ({

            activeStories: [

            ...state.activeStories,

            story

            ]

        })),

    setPendingStory: (storyId) =>
      set({
        pendingStoryId: storyId
      }),

    clearPendingStory: () =>
      set({
        pendingStoryId: null
      }),

    completeStory: (storyId) =>

        set((state) => ({

            activeStories:

            state.activeStories.filter(
                (story) =>
                story.id !== storyId
            ),

            cityStoryProgress: {

            ...state.cityStoryProgress,

            fukuoka: {

                ...state.cityStoryProgress
                .fukuoka,

                completedStories: [

                ...state
                    .cityStoryProgress
                    .fukuoka
                    .completedStories,

                storyId

                ]

            }

            }

        })),

        setStoryNote:
        (storyId, note) =>

            set((state) => ({

            storyNotes: {

                ...state.storyNotes,

                [storyId]: note

            }

            })),

        resetStoryProgress: () =>

        set({

            cityStoryProgress: {

            fukuoka: {

                baseLevel: 0,

                completedStories: []

            }

            },

            activeStories: [],

            storyNotes: {},

            pendingStoryId:
            null,

        }),

        }),

      {

        name:
          'record-storage'

      }

    )

  )