import React from 'react'

type Props = {
  back: () => void
}

export default function ProgressPage({ back }: Props) {
  const [pct, setPct] = React.useState(10)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = Number(e.target.value)
    if (isNaN(v)) v = 0
    if (v < 0) v = 0
    if (v > 100) v = 100
    setPct(Math.round(v))
  }

  return (
    <div className="page">
      <h1>Progress bar</h1>
      <div className="row">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="pct-badge">{pct}%</div>
      </div>
      <label>Input Percentage:</label>
      <input className="input-num" type="number" min={0} max={100} value={pct} onChange={onChange} />
      <div style={{ marginTop: 12 }}>
        <button onClick={back}>Back</button>
      </div>
    </div>
  )
}
