import SpeechButton from "./SpeechButton"

function ExpressionCard({
  jp,
  meaning,
}) {

  return (

    <div className="expression-card">

      <div className="expression-jp">
        {jp}
      </div>

      <div className="expression-meaning">
        {meaning}
      </div>

      <SpeechButton text={jp} />

    </div>

  )
}

export default ExpressionCard