import { useState } from "react"

import ExpressionCard from "./ExpressionCard"

function ExpressionStudySection() {

  const [expressionText, setExpressionText]
    = useState("")

  const [expressions, setExpressions]
    = useState([])

  const [
    currentExpressionIndex,
    setCurrentExpressionIndex,
  ] = useState(0)
  const [isInputOpen, setIsInputOpen]
    = useState(true)

  function loadExpressions() {

    if (!expressionText.trim()) {
        return
    }

    const lines = expressionText
      .split("\n")
      .filter(line => line.trim() !== "")

    const result = []

    for (let i = 0; i < lines.length; i += 3) {

      result.push({
        jp: lines[i],

        reading: lines[i + 1]
          ?.replace(/[()]/g, ""),

        meaning: lines[i + 2],
      })

    }

    setExpressions(result)

    setCurrentExpressionIndex(0)

    setIsInputOpen(false)

  }
  async function copyPrompt() {

    const prompt =
    `오늘 회화에서 나온 중요한 일본어 표현들을 아래 형식으로 정리해주세요.

    형식:
    일본어
    (읽기)
    한국어 뜻

    예시:
    おすすめ
    (osusume)
    추천

    こんにちは
    (konnichiwa)
    안녕하세요

    규칙:
    - 한 표현당 정확히 3줄
    - 표현 사이에는 한 줄 띄우기
    - 짧고 실전적인 표현 위주
    - 최대 5개`

    await navigator.clipboard.writeText(
        prompt
    )

    alert("프롬프트가 복사되었습니다!")
    }

  return (

    <>

      {
        isInputOpen && (

            <div className="expression-input-section">

            <textarea
                className="expression-textarea"

                value={expressionText}

                onChange={(event) =>
                setExpressionText(event.target.value)
                }
            />

            <button
                className="load-expression-button"

                onClick={loadExpressions}
            >
                표현 불러오기
            </button>

            </div>

        )
        }

      {
        expressions.length > 0 && (

          <>

            <ExpressionCard
              jp={
                expressions[currentExpressionIndex].jp
              }

              meaning={
                expressions[currentExpressionIndex]
                  .meaning
              }
            />

            <div className="expression-navigation">

              <button
                className="expression-nav-button"

                disabled={
                  currentExpressionIndex === 0
                }

                onClick={() =>
                  setCurrentExpressionIndex(
                    currentExpressionIndex - 1
                  )
                }
              >
                이전
              </button>

              <div className="expression-page">

                {currentExpressionIndex + 1}

                /

                {expressions.length}

              </div>

              <button
                className="expression-nav-button"

                disabled={
                  currentExpressionIndex ===
                  expressions.length - 1
                }

                onClick={() =>
                  setCurrentExpressionIndex(
                    currentExpressionIndex + 1
                  )
                }
              >
                다음
              </button>

              {
                !isInputOpen && (

                    <button
                    className="reopen-input-button"

                    onClick={() =>
                        setIsInputOpen(true)
                    }
                    >
                    + 표현 불러오기
                    </button>

                )
                }

            </div>

          </>

        )
      }

    </>

  )
}

export default ExpressionStudySection