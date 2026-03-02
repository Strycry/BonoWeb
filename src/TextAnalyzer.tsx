import React, { useState } from 'react'

export default function TextAnalyzer() {
  const [text, setText] = useState('')

  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const chars = text.length
  const sentences = text.trim() ? text.split(/[.!?]+/).filter((s) => s.trim()).length : 0
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter((p) => p.trim()).length : 0
  const readTime = Math.ceil(words / 200) || 0

  const wordArray = text.split(/\s+/).filter((w) => w)
  const longestWord = wordArray.length ? wordArray.reduce((a, b) => (a.length > b.length ? a : b)) : '-'

  return (
    <div className="analyzer-container">
      <div className="analyzer-header">
        <h2>Text Analyser</h2>
        <div className="analyzer-icons">
          <span>📊</span>
          <span>🐦</span>
          <span>💼</span>
        </div>
      </div>

      <div className="analyzer-stats">
        <div className="stat">
          <div className="stat-label">Words</div>
          <div className="stat-value">{words}</div>
        </div>
        <div className="stat">
          <div className="stat-label">Characters</div>
          <div className="stat-value">{chars}</div>
        </div>
        <div className="stat">
          <div className="stat-label">Sentences</div>
          <div className="stat-value">{sentences}</div>
        </div>
        <div className="stat">
          <div className="stat-label">Paragraphs</div>
          <div className="stat-value">{paragraphs}</div>
        </div>
      </div>

      <textarea
        className="analyzer-textarea"
        placeholder="Paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="analyzer-footer">
        <div className="footer-item">
          <span className="footer-label">Average Reading Time:</span>
          <span className="footer-value">{readTime} min</span>
        </div>
        <div className="footer-item">
          <span className="footer-label">Longest word:</span>
          <span className="footer-value">{longestWord}</span>
        </div>
      </div>

      <div className="analyzer-credits">
        <div>Build by your name</div>
        <div className="analyzer-links">
          <a href="#">About Us</a> | <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  )
}
