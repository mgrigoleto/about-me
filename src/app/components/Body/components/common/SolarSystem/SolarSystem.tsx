'use client'
import { useEffect, useRef } from 'react'

type Speck = { x: number; y: number; radius: number; alpha: number }
type Planet = {
    orbit: number
    size: number
    tone: number
    speed: number
    phase: number
    ring?: boolean
}

const planets: Planet[] = [
    { orbit: 0.16, size: 0.012, tone: 168, speed: 0.16, phase: 0.6 },
    { orbit: 0.24, size: 0.02, tone: 188, speed: 0.12, phase: 2.2 },
    { orbit: 0.33, size: 0.021, tone: 176, speed: 0.09, phase: 4.4 },
    { orbit: 0.43, size: 0.015, tone: 142, speed: 0.07, phase: 1.3 },
    { orbit: 0.58, size: 0.048, tone: 198, speed: 0.042, phase: 5.2 },
    { orbit: 0.72, size: 0.04, tone: 184, speed: 0.03, phase: 3.1, ring: true },
    { orbit: 0.86, size: 0.03, tone: 160, speed: 0.02, phase: 0.9 },
    { orbit: 0.98, size: 0.029, tone: 136, speed: 0.014, phase: 2.6 },
]

const specksFor = (count: number): Speck[] => {
    let value = 91
    const next = () => {
        value = (value * 1664525 + 1013904223) % 4294967296
        return value / 4294967296
    }
    return Array.from({ length: count }, () => ({
        x: next(),
        y: next(),
        radius: 0.35 + next() * 0.8,
        alpha: 0.15 + next() * 0.35,
    }))
}

const SolarSystem = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const parent = canvas?.parentElement
        if (!canvas || !parent) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const specks = specksFor(60)
        let elapsed = 0
        let lastTick = 0
        let request = 0
        let running = false

        const resize = () => {
            const { width, height } = parent.getBoundingClientRect()
            const dpr = Math.min(window.devicePixelRatio || 1, 1.25)
            canvas.width = Math.max(1, Math.floor(width * dpr))
            canvas.height = Math.max(1, Math.floor(height * dpr))
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }

        const draw = (time: number) => {
            const width = canvas.clientWidth
            const height = canvas.clientHeight
            const centerX = width * 0.5
            const centerY = height * 0.48
            const reach = Math.min(width * 0.72, height * 0.52)
            const tilt = 0.5
            const sunRadius = Math.max(16, reach * 0.055)

            ctx.clearRect(0, 0, width, height)
            ctx.fillStyle = '#000000'
            ctx.fillRect(0, 0, width, height)

            specks.forEach((speck) => {
                ctx.fillStyle = `rgba(186, 186, 192, ${speck.alpha})`
                ctx.beginPath()
                ctx.arc(speck.x * width, speck.y * height, speck.radius, 0, Math.PI * 2)
                ctx.fill()
            })

            planets.forEach((planet) => {
                ctx.beginPath()
                ctx.ellipse(centerX, centerY, reach * planet.orbit, reach * planet.orbit * tilt, 0, 0, Math.PI * 2)
                ctx.strokeStyle = 'rgba(148, 148, 156, 0.32)'
                ctx.lineWidth = 1
                ctx.stroke()
            })

            const place = (planet: Planet) => {
                const angle = planet.phase + time * planet.speed
                return {
                    angle,
                    x: centerX + Math.cos(angle) * reach * planet.orbit,
                    y: centerY + Math.sin(angle) * reach * planet.orbit * tilt,
                    radius: Math.max(2.4, reach * planet.size),
                }
            }

            const paintPlanet = (planet: Planet, body: ReturnType<typeof place>) => {
                ctx.beginPath()
                ctx.arc(body.x, body.y, body.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgb(${planet.tone}, ${planet.tone}, ${Math.min(255, planet.tone + 6)})`
                ctx.fill()

                ctx.beginPath()
                ctx.arc(body.x - body.radius * 0.28, body.y - body.radius * 0.28, body.radius * 0.45, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, 0.14)`
                ctx.fill()

                if (!planet.ring) return

                ctx.save()
                ctx.translate(body.x, body.y)
                ctx.rotate(-0.5)
                ctx.scale(1, 0.36)
                ctx.beginPath()
                ctx.arc(0, 0, body.radius * 1.85, 0, Math.PI * 2)
                ctx.strokeStyle = `rgba(${planet.tone}, ${planet.tone}, ${Math.min(255, planet.tone + 10)}, 0.75)`
                ctx.lineWidth = Math.max(1.2, body.radius * 0.16)
                ctx.stroke()
                ctx.restore()
            }

            const bodies = planets.map((planet) => ({ planet, body: place(planet) }))
            const behind = bodies.filter((item) => Math.sin(item.body.angle) < 0)
            const ahead = bodies.filter((item) => Math.sin(item.body.angle) >= 0)

            behind.forEach((item) => paintPlanet(item.planet, item.body))

            const glow = ctx.createRadialGradient(centerX, centerY, sunRadius, centerX, centerY, sunRadius * 2.6)
            glow.addColorStop(0, 'rgba(120, 120, 128, 0.18)')
            glow.addColorStop(1, 'rgba(0, 0, 0, 0)')
            ctx.fillStyle = glow
            ctx.beginPath()
            ctx.arc(centerX, centerY, sunRadius * 2.6, 0, Math.PI * 2)
            ctx.fill()

            const sun = ctx.createRadialGradient(centerX, centerY, sunRadius * 0.15, centerX, centerY, sunRadius)
            sun.addColorStop(0, 'rgb(96, 96, 102)')
            sun.addColorStop(0.72, 'rgb(70, 70, 76)')
            sun.addColorStop(1, 'rgb(52, 52, 58)')
            ctx.fillStyle = sun
            ctx.beginPath()
            ctx.arc(centerX, centerY, sunRadius, 0, Math.PI * 2)
            ctx.fill()

            ahead.forEach((item) => paintPlanet(item.planet, item.body))
        }

        const loop = (now: number) => {
            if (!running) return
            if (!lastTick) lastTick = now
            elapsed += Math.min(0.05, (now - lastTick) / 1000)
            lastTick = now
            draw(elapsed)
            request = requestAnimationFrame(loop)
        }

        const start = () => {
            if (running || reduced || document.hidden) return
            running = true
            lastTick = 0
            request = requestAnimationFrame(loop)
        }

        const stop = () => {
            running = false
            cancelAnimationFrame(request)
        }

        resize()
        draw(0)

        const resizeObserver = new ResizeObserver(() => {
            resize()
            draw(elapsed)
        })
        resizeObserver.observe(parent)
        const visibilityObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) start()
            else stop()
        })
        visibilityObserver.observe(parent)

        const onVisibility = () => {
            if (document.hidden) stop()
            else start()
        }
        document.addEventListener('visibilitychange', onVisibility)

        return () => {
            stop()
            resizeObserver.disconnect()
            visibilityObserver.disconnect()
            document.removeEventListener('visibilitychange', onVisibility)
        }
    }, [])

    return <canvas ref={canvasRef} className="space-canvas" aria-hidden="true" />
}

export default SolarSystem
