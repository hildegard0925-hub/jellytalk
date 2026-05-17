import { useState } from 'react'
import { useRecordStore } from '../store/recordStore'
import { fukuokaStories } from '../content/stories/fukuoka'
import '../styles/record.css'


function RecordPage() {

  const activeStories =
    useRecordStore(
      (state) =>
        state.activeStories
    )
  const completeStory =
    useRecordStore(
      (state) =>
        state.completeStory
    )

  const completedStories =
    useRecordStore(
      (state) =>

        state
          .cityStoryProgress
          .fukuoka
          .completedStories
    )
  const storyNotes =
    useRecordStore(
      (state) =>
        state.storyNotes
    )

  const setStoryNote =
    useRecordStore(
      (state) =>
        state.setStoryNote
    )
  const [

    openedStory,

    setOpenedStory

  ] = useState(null)

  return (

    <div>

      <h2>
        진행 중 스토리
      </h2>

      {

        activeStories.map(
          (story) => (

            <div
              key={story.id}
            >

              <p>
                {story.title}
              </p>

              <button

                className="
                  story-complete-button
                "

                onClick={() => {

                  completeStory(
                    story.id
                  )

                }}

              >

                완료

              </button>

            </div>

          )
        )

      }
      <div>

        <h2>
          완료한 스토리
        </h2>

        {

          completedStories.map(
            (storyId) => {

              const story =

                fukuokaStories.find(
                  (story) =>
                    story.id === storyId
                )

              if (!story) {

                return null

              }

              return (

                <div
                  key={story.id}

                  style={{

                    marginBottom: '14px'

                  }}
                >

                  <p

                    onClick={() => {

                      setOpenedStory(

                        openedStory ===
                        story.id

                          ? null

                          : story.id

                      )

                    }}

                    style={{

                      cursor: 'pointer'

                    }}

                  >

                    <img

                      src={
                        story.reward.stamp
                      }

                      alt="stamp"

                      width="22"

                      style={{

                        verticalAlign:
                          'middle',

                        marginRight: '8px'

                      }}

                    />

                    {story.title}

                    {

                      openedStory ===
                      story.id

                        ? ' ▲'

                        : ' ▼'

                    }

                  </p>

                  {

                    openedStory ===
                    story.id && (

                      <div

                        style={{

                          marginLeft: '30px',
                          marginRight: '24px',

                          marginTop: '8px',

                          color: '#7b5160',

                          lineHeight: 1.7

                        }}

                      >

                        <p

                          style={{

                            marginBottom: '4px'

                          }}

                        >

                          {story.location}

                        </p>

                        <p

                          style={{

                            marginTop: '0px'

                          }}

                        >

                          {story.description}

                        </p>

                        <p className="story-summary-card">

                          {story.summary}

                        </p>

                        <textarea

                            className="
                              story-note-textarea
                            "

                            spellCheck={false}

                            value={
                              storyNotes[
                                story.id
                              ] || ''
                            }

                            onChange={(event) => {

                              setStoryNote(

                                story.id,

                                event.target.value

                              )

                            }}

                            placeholder="
오늘 여행에서 기억에 남은 말을 남겨보세요.
                          "

                          />

                      </div>

                    )

                  }

                </div>

              )

            }
          )

        }

      </div>

    </div>

  )

}

export default RecordPage