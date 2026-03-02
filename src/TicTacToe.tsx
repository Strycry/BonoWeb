import React, { useState } from 'react'

type Props = {
  back: () => void
}

export default function TicTacToe({ back }: Props) {
  const [cells, setCells] = useState<string[]>(Array(9).fill(''))
  const [turn, setTurn] = useState<'X'|'O'>('X')

  const clickCell = (i: number) => {
    if (cells[i] || false) return
    const next = [...cells]
    next[i] = turn
    setCells(next)
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  return (
    <div className="page">
      <h1>Tic-tac-toe</h1>
      <div className="board">
        {cells.map((v, i) => (
          <div key={i} className="cell" onClick={() => clickCell(i)}>
            {v}
          </div>
        ))}
      </div>
      <button style={{ marginTop: 12 }} onClick={back}>Back</button>
    </div>
  )
}
