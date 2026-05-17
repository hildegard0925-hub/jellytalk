import "../styles/word.css"

const kanaList = [

  { hira: "あ", hiraKo: "아", kata: "ア", kataKo: "아" },
  { hira: "い", hiraKo: "이", kata: "イ", kataKo: "이" },
  { hira: "う", hiraKo: "우", kata: "ウ", kataKo: "우" },
  { hira: "え", hiraKo: "에", kata: "エ", kataKo: "에" },
  { hira: "お", hiraKo: "오", kata: "オ", kataKo: "오" },

  { hira: "か", hiraKo: "카", kata: "カ", kataKo: "카" },
  { hira: "き", hiraKo: "키", kata: "キ", kataKo: "키" },
  { hira: "く", hiraKo: "쿠", kata: "ク", kataKo: "쿠" },
  { hira: "け", hiraKo: "케", kata: "ケ", kataKo: "케" },
  { hira: "こ", hiraKo: "코", kata: "コ", kataKo: "코" },

  { hira: "さ", hiraKo: "사", kata: "サ", kataKo: "사" },
  { hira: "し", hiraKo: "시", kata: "シ", kataKo: "시" },
  { hira: "す", hiraKo: "스", kata: "ス", kataKo: "스" },
  { hira: "せ", hiraKo: "세", kata: "セ", kataKo: "세" },
  { hira: "そ", hiraKo: "소", kata: "ソ", kataKo: "소" },

  { hira: "た", hiraKo: "타", kata: "タ", kataKo: "타" },
  { hira: "ち", hiraKo: "치", kata: "チ", kataKo: "치" },
  { hira: "つ", hiraKo: "츠", kata: "ツ", kataKo: "츠" },
  { hira: "て", hiraKo: "테", kata: "テ", kataKo: "테" },
  { hira: "と", hiraKo: "토", kata: "ト", kataKo: "토" },

]

function KanaPage() {

  return (

    <div className="kana-page">

      <h2 className="kana-title">
        히라가나 가타카나
      </h2>

      <div className="kana-list">

        {

          Array.from({
            length: Math.ceil(kanaList.length / 2)
          }).map((_, index) => {

            const first =
              kanaList[index * 2]

            const second =
              kanaList[index * 2 + 1]

            return (

              <div
                key={index}

                className="kana-row"
              >

                <div className="kana-side">

                    {
                        first && (
                        <span className="kana-pair">

                        <span className="kana-jp">
                            {first.hira}
                        </span>

                        <span className="kana-ko">
                            {first.hiraKo}
                        </span>

                        </span>
                        )
                    }

                    {
                        second && (
                        <span className="kana-pair">

                        <span className="kana-jp">
                            {second.hira}
                        </span>

                        <span className="kana-ko">
                            {second.hiraKo}
                        </span>

                        </span>
                        )
                    }

                    </div>

                    <div className="kana-divider">
                    |
                    </div>

                    <div className="kana-side">

                    {
                        first && (
                        <span className="kana-pair">

                        <span className="kana-jp">
                            {first.kata}
                        </span>

                        <span className="kana-ko">
                            {first.kataKo}
                        </span>

                        </span>
                        )
                    }

                    {
                        second && (
                        <span className="kana-pair">

                        <span className="kana-jp">
                            {second.kata}
                        </span>

                        <span className="kana-ko">
                            {second.kataKo}
                        </span>

                        </span>
                        )
                    }

                    </div>

              </div>

            )

          })

        }

      </div>

    </div>

  )

}

export default KanaPage