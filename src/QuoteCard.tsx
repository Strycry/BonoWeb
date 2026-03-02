import React, { useState } from 'react'

const quotes = [
  {
    text: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    author: 'Albert Schweitzer'
  },
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs'
  },
  {
    text: 'Innovation distinguishes between a leader and a follower.',
    author: 'Steve Jobs'
  },
  {
    text: 'Life is what happens when you are busy making other plans.',
    author: 'John Lennon'
  },
  {
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt'
  },
  {
    text: 'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle'
  },
  {
    text: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney'
  },
  {
    text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson'
  },
  {
    text: 'Success is not final, failure is not fatal.',
    author: 'Winston Churchill'
  },
  {
    text: 'Believe you can and you are halfway there.',
    author: 'Theodore Roosevelt'
  }
]

export default function QuoteCard() {
  const [index, setIndex] = useState(0)
  const quote = quotes[index]

  const prev = () => setIndex((i) => (i === 0 ? quotes.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === quotes.length - 1 ? 0 : i + 1))

  return (
    <div className="quote-container">
      <div className="quote-bar"></div>
      <div className="quote-content">
        <div className="quote-mark">"</div>
        <p className="quote-text">{quote.text}</p>
        <p className="quote-author">- {quote.author}</p>

        <div className="quote-controls">
          <button className="quote-btn" onClick={prev}>
            &#10094;
          </button>
          <button className="quote-btn" onClick={next}>
            &#10095;
          </button>
        </div>
      </div>
      <div className="quote-bar"></div>
    </div>
  )
}
