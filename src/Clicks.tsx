import React, { useEffect, useState } from 'react'

type Props = {
  back: () => void
}

export default function Clicks({ back }: Props) {
  const [count, setCount] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(t)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])

  const onClick = () => {
    if (timeLeft > 0) setCount((c) => c + 1)
  }

  return (
    <div className="page">
      <h1>No of Clicks until timer expires</h1>
      <div className="click-area">
        <div className="big-count">{count}</div>
        <div className="time">Time left: {timeLeft} seconds</div>
        <button className="click-btn" onClick={onClick}>+</button>
      </div>
      <div style={{ marginTop: 12 }}>
        <button onClick={back}>Back</button>
      </div>
    </div>
  )
}
