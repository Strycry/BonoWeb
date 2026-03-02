import React, { createContext, useContext, useState, ReactNode } from 'react'

interface DMContext {
  dark: boolean
  toggle: () => void
}

const DarkModeContext = createContext<DMContext>({ dark: false, toggle: () => {} })

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false)
  const toggle = () => setDark((d) => !d)
  return <DarkModeContext.Provider value={{ dark, toggle }}>{children}</DarkModeContext.Provider>
}

export function useDarkMode() {
  return useContext(DarkModeContext)
}
