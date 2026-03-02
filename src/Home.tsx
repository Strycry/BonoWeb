import React from 'react'

type Props = {
  go: (view: string) => void
}

export default function Home({ go }: Props) {
  return (
    <div className="page">
      <h1>Main Menu</h1>
      <div className="menu">
        <button className="menu-btn" onClick={() => go('progress')}>Progress page</button>
        <button className="menu-btn" onClick={() => go('clicks')}>Click game</button>
        <button className="menu-btn" onClick={() => go('bonus')}>Other bonus</button>
      </div>
    </div>
  )
}
