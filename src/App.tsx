import React, { useState } from 'react'
import './App.css'
import Home from './Home'
import Clicks from './Clicks'
import ProgressPage from './ProgressPage'

export default function App() {
  const [view, setView] = useState<'home' | 'progress' | 'clicks' | 'bonus'>('home')

  if (view === 'home') return <Home go={(v) => setView(v as any)} />
  if (view === 'progress') return <ProgressPage back={() => setView('home')} />
  if (view === 'clicks') return <Clicks back={() => setView('home')} />
  return (
    <div className="page">
      <h1>Other bonus</h1>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => setView('home')}>Back</button>
      </div>
    </div>
  )
}
