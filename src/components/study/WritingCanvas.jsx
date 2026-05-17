import { useEffect, useRef, useState } from "react"

function WritingCanvas() {

  const canvasRef = useRef(null)

  const isDrawingRef =
    useRef(false)

  useEffect(() => {

    const canvas = canvasRef.current

    const ctx =
      canvas.getContext("2d")

    function resizeCanvas() {

      const rect =
        canvas.getBoundingClientRect()

      canvas.width = rect.width

      canvas.height = rect.height

      ctx.lineCap = "butt"

      ctx.lineJoin = "miter"

      drawGuideLines()

    }

    resizeCanvas()

    window.addEventListener(
      "resize",
      resizeCanvas
    )

    return () => {

      window.removeEventListener(
        "resize",
        resizeCanvas
      )

    }

  }, [])

  function drawGuideLines() {

    const canvas = canvasRef.current

    const ctx =
      canvas.getContext("2d")

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    )

    ctx.beginPath()

    for (
      let y = 40;
      y < canvas.height;
      y += 40
    ) {

      ctx.moveTo(12, y)

      ctx.lineTo(
        canvas.width - 12,
        y
      )

    }

    ctx.strokeStyle =
      "#e4cfd4"

    ctx.lineWidth = 1

    ctx.stroke()

  }

  function getPosition(e) {

    const canvas =
      canvasRef.current

    const rect =
      canvas.getBoundingClientRect()

    const touch =
      e.touches?.[0]

    return {

      x:
        (touch?.clientX ??
          e.clientX)
        - rect.left,

      y:
        (touch?.clientY ??
          e.clientY)
        - rect.top
    }

  }

  function startDrawing(e) {

    const ctx =
      canvasRef.current
        .getContext("2d")

    ctx.strokeStyle =
      "#8b5c67"

    ctx.lineWidth = 1

    ctx.lineCap = "round"

    ctx.lineJoin = "round"

    const pos =
      getPosition(e)

    ctx.beginPath()

    ctx.moveTo(
      pos.x,
      pos.y
    )

    isDrawingRef.current = true

  }

  function draw(e) {

    if (!isDrawingRef.current)
      return

    const ctx =
      canvasRef.current
        .getContext("2d")

    const pos =
      getPosition(e)

    ctx.lineTo(
      pos.x,
      pos.y
    )

    ctx.stroke()

  }

  function stopDrawing() {

    isDrawingRef.current = false

  }

  function clearCanvas() {

    drawGuideLines()

  }

  return (

    <div
      className=
        "writing-canvas-wrapper"
    >

      <div className="writing-header">

        <div className="writing-title">
          자유롭게 써보기
        </div>

        <button
          className="clear-button"

          onClick={clearCanvas}
        >
          지우기
        </button>

      </div>

      <canvas
        ref={canvasRef}

        className="writing-canvas"

        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}

        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />

    </div>

  )

}

export default WritingCanvas