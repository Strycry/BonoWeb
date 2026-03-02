import React from 'react'

type NavbarProps = {
  onHome: () => void
  onFeatures: () => void
  onPricing: () => void
  onAbout: () => void
}

export default function Navbar({ onHome, onFeatures, onPricing, onAbout }: NavbarProps) {
  return (
    <div className="navbar">
      <div className="navbar-brand">Navbar</div>
      <div className="navbar-items">
        <button className="nav-link" onClick={onHome}>
          Home
        </button>
        <button className="nav-link" onClick={onFeatures}>
          Features
        </button>
        <button className="nav-link" onClick={onPricing}>
          Pricing
        </button>
        <button className="nav-link" onClick={onAbout}>
          About
        </button>
      </div>
    </div>
  )
}
