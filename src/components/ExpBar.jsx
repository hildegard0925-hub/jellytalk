function ExpBar({

  currentExp,

  maxExp = 100,

}) {

  const expPercent =
    (currentExp / maxExp) * 100

  return (

    <div className="exp-bar-wrapper">

      <div
        className="exp-bar-fill"

        style={{
          width: `${expPercent}%`
        }}
      />

    </div>

  )

}

export default ExpBar