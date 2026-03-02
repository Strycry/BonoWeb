import React, { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Clicks from './Clicks'
import ProgressPage from './ProgressPage'
import TicTacToe from './TicTacToe'
import TextAnalyzer from './TextAnalyzer'

export default function App() {
  const [view, setView] = useState<'home' | 'progress' | 'clicks' | 'tic' | 'pricing' | 'about' | 'analyzer'>('home')

  const handleNavClick = (section: string) => {
    if (section === 'features') setView('analyzer')
    else if (section === 'pricing') setView('pricing')
    else if (section === 'about') setView('about')
    else setView('home')
  }

  const handleBonusClick = (bonus: string) => {
    setView(bonus as any)
  }

  const renderContent = () => {
    if (view === 'home' || view === undefined) {
      return <Home go={handleBonusClick} />
    }
    if (view === 'progress') return <ProgressPage back={() => setView('home')} />
    if (view === 'clicks') return <Clicks back={() => setView('home')} />
    if (view === 'tic') return <TicTacToe back={() => setView('home')} />
    if (view === 'analyzer') return <TextAnalyzer />
    if (view === 'pricing')
      return (
        <div className="page">
          <h1>Pricing</h1>
          <p>Pricing page content</p>
        </div>
      )
    if (view === 'about')
      return (
        <div className="page">
          <h1>About</h1>
          <p>About page content</p>
        </div>
      )
  }

  return (
    <div className="app-container">
      <Navbar
        onHome={() => handleNavClick('home')}
        onFeatures={() => handleNavClick('features')}
        onPricing={() => handleNavClick('pricing')}
        onAbout={() => handleNavClick('about')}
      />
      {renderContent()}
    </div>
  )
}
