import { useState } from "react"
import ExpressionStudySection from "../components/study/ExpressionStudySection"

import WritingCanvas from "../components/study/WritingCanvas"

import KanaPage from "./KanaPage"

import "../styles/word.css"

function WordPage() {
  const [showKanaPage,
    setShowKanaPage]
  = useState(false)

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

    
    window.open(
      "https://chat.openai.com",
      "_blank"
    )
    await navigator.clipboard.writeText(
      prompt
    )

  }

  return (

    <div className="word-page">

      <div className="study-header">

        <h2 className="study-title">
          표현 연습
        </h2>

        <div className="study-header-buttons">

          <button
            className="kana-button"

            onClick={() =>
              setShowKanaPage(
                !showKanaPage
              )
            }
          >
            あ
          </button>

          <button
            className="copy-icon-button"

            onClick={copyPrompt}
          >
            📋
          </button>

        </div>

      </div>

      {
          showKanaPage && (
            <KanaPage />
          )
        }

      <ExpressionStudySection />

      <WritingCanvas />

    </div>

  )

}

export default WordPage