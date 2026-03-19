import { useEffect, useRef, useCallback } from 'react'
import styles from './InteractiveBackground.module.css'

export function InteractiveBackground() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: null, y: null })
  const animationRef = useRef(null)

  const createParticles = useCallback(canvas => {
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000))
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    return particles
  }, [])

  const drawParticle = useCallback((ctx, particle, isDark) => {
    const pulseOffset = Math.sin(particle.pulse) * 0.3
    const currentOpacity = Math.min(1, particle.opacity + pulseOffset)

    const gradient = ctx.createRadialGradient(
      particle.x,
      particle.y,
      0,
      particle.x,
      particle.y,
      particle.radius * 3
    )

    const primaryColor = isDark ? '15, 98, 254' : '0, 82, 204'
    const secondaryColor = isDark ? '0, 212, 170' : '0, 135, 90'

    gradient.addColorStop(0, `rgba(${primaryColor}, ${currentOpacity})`)
    gradient.addColorStop(0.5, `rgba(${secondaryColor}, ${currentOpacity * 0.5})`)
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2)
    ctx.fillStyle = gradient
    ctx.fill()

    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${primaryColor}, ${currentOpacity + 0.3})`
    ctx.fill()
  }, [])

  const drawConnections = useCallback((ctx, particles, maxDistance, isDark) => {
    const lineColor = isDark ? '15, 98, 254' : '0, 82, 204'

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.15
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }
    }
  }, [])

  const drawMeshGradient = useCallback((ctx, canvas, isDark) => {
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    const primaryColor = isDark ? 'rgba(15, 98, 254, 0.08)' : 'rgba(0, 82, 204, 0.05)'
    const secondaryColor = isDark ? 'rgba(0, 212, 170, 0.05)' : 'rgba(0, 135, 90, 0.03)'

    const gradient = ctx.createRadialGradient(
      centerX - canvas.width * 0.2,
      centerY - canvas.height * 0.2,
      0,
      centerX,
      centerY,
      canvas.width * 0.8
    )
    gradient.addColorStop(0, primaryColor)
    gradient.addColorStop(0.5, secondaryColor)
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let isDark = document.documentElement.getAttribute('data-theme') !== 'light'

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = createParticles(canvas)
    }

    const handleMouseMove = e => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null }
    }

    const handleThemeChange = () => {
      isDark = document.documentElement.getAttribute('data-theme') !== 'light'
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawMeshGradient(ctx, canvas, isDark)

      particlesRef.current.forEach(particle => {
        particle.pulse += particle.pulseSpeed

        if (mouseRef.current.x !== null) {
          const dx = mouseRef.current.x - particle.x
          const dy = mouseRef.current.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            particle.vx -= (dx / distance) * force * 0.02
            particle.vy -= (dy / distance) * force * 0.02
          }
        }

        particle.vx *= 0.99
        particle.vy *= 0.99

        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        drawParticle(ctx, particle, isDark)
      })

      drawConnections(ctx, particlesRef.current, 150, isDark)

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('themechange', handleThemeChange)

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'data-theme') {
          handleThemeChange()
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('themechange', handleThemeChange)
      observer.disconnect()
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [createParticles, drawParticle, drawConnections, drawMeshGradient])

  return (
    <div className={styles.background}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.overlay} />
    </div>
  )
}
