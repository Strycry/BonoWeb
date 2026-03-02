import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DarkModeProvider, useDarkMode } from './DarkModeContext'

const Root = () => {
  const { dark } = useDarkMode()
  return (
    <div className={dark ? 'dark' : ''} style={{ height: '100%' }}>
      <App />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <Root />
    </DarkModeProvider>
  </StrictMode>,
)
