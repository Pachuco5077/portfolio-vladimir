import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
import { useTheme, useLanguage } from '@/context'
import { cn } from '@/utils'
import styles from './Navbar.module.css'

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { isDark, toggleTheme } = useTheme()
  const { lang, t, changeLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map(item => item.href.replace('#', ''))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()

    setIsMobileMenuOpen(false)

    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, 150)
  }, [])

  const handleLanguageToggle = () => {
    changeLanguage(lang === 'es' ? 'en' : 'es')
  }

  const handleLogoClick = e => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 150)
  }

  return (
    <nav className={cn(styles.navbar, isScrolled && styles.scrolled)}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} onClick={handleLogoClick}>
          <span className={styles.logoIcon}>&gt;</span>
          <span className={styles.logoText}>VDG</span>
        </a>

        <ul className={styles.navLinks}>
          {navItems.map(item => (
            <li key={item.key}>
              <a
                href={item.href}
                className={cn(styles.navLink, activeSection === item.key && styles.active)}
                onClick={e => handleNavClick(e, item.href)}
              >
                {t(`nav.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={styles.iconButton}
            onClick={handleLanguageToggle}
            aria-label="Toggle language"
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe size={18} />
            <span className={styles.langBadge}>{lang.toUpperCase()}</span>
          </button>

          <button
            className={styles.iconButton}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className={styles.mobileNavLinks}>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    className={cn(
                      styles.mobileNavLink,
                      activeSection === item.key && styles.active
                    )}
                    onClick={e => handleNavClick(e, item.href)}
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
