import { createContext, useContext, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const { i18n, t } = useTranslation()

  const changeLanguage = useCallback(
    lang => {
      i18n.changeLanguage(lang)
      localStorage.setItem('lang', lang)
      document.documentElement.lang = lang
    },
    [i18n]
  )

  const currentLanguage = i18n.language

  return (
    <LanguageContext.Provider value={{ lang: currentLanguage, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
