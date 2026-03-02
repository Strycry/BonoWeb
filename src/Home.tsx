import React from 'react'
import { useDarkMode } from './DarkModeContext'
import QuoteCard from './QuoteCard'

type Props = {
  go: (view: string) => void
}

export default function Home({ go }: Props) {
  const { dark, toggle } = useDarkMode()

  return (
    <div className="page">
      <h1>Main Menu</h1>
      <div className="toggle" onClick={toggle}>
        <div className="toggle-ball">{dark ? '🌙' : '☀️'}</div>
      </div>
      <div className="menu">
        <button className="menu-btn" onClick={() => go('progress')}>Progress page</button>
        <button className="menu-btn" onClick={() => go('clicks')}>Click game</button>
        <button className="menu-btn" onClick={() => go('tic')}>Tic-tac-toe</button>
        <button className="menu-btn" onClick={() => go('analyzer')}>Text Analyser</button>
      </div>
      <QuoteCard />
    </div>
  )
}
