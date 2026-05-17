function SpeechButton({
  text,
}) {

  function speak() {

    const utterance =
      new SpeechSynthesisUtterance(text)

    utterance.lang = "ja-JP"

    speechSynthesis.speak(utterance)

  }

  return (

    <button
      className="speech-button"

      onClick={speak}
    >
      🔊 발음 듣기
    </button>

  )
}

export default SpeechButton