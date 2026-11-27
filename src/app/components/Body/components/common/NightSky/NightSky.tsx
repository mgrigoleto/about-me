'use client'
import { useEffect, useRef } from 'react'

type Star = {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    alpha: number
    phase: number
}

const random = (seed: number) => {
    let value = seed
    return () => {
        value = (value * 1664525 + 1013904223) % 4294967296
        return value / 4294967296
    }
}

const buildStars = (width: number, height: number): Star[] => {
    const next = random(41)
    const count = Math.min(220, Math.round((width * height) / 11000))
    return Array.from({ length: count }, () => {
        const bright = next() > 0.92
        const angle = next() * Math.PI * 2
        const speed = 6 + next() * 10
        return {
            x: next() * width,
            y: next() * height,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            radius: bright ? 1.1 + next() * 1.1 : 0.3 + next() * 0.7,
            alpha: bright ? 0.55 + next() * 0.35 : 0.18 + next() * 0.4,
            phase: next() * Math.PI * 2,
        }
    })
}

const NightSky = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const parent = canvas?.parentElement
        if (!canvas || !parent) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        let stars: Star[] = []
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
            stars = buildStars(width, height)
        }

        const draw = (time: number, moving: boolean) => {
            const width = canvas.clientWidth
            const height = canvas.clientHeight

            ctx.clearRect(0, 0, width, height)
            ctx.fillStyle = '#000000'
            ctx.fillRect(0, 0, width, height)

            ctx.save()
            ctx.translate(width * 0.55, height * 0.48)
            ctx.rotate(-0.45)
            const band = ctx.createLinearGradient(0, -height * 0.22, 0, height * 0.22)
            band.addColorStop(0, 'rgba(0, 0, 0, 0)')
            band.addColorStop(0.5, 'rgba(150, 150, 158, 0.07)')
            band.addColorStop(1, 'rgba(0, 0, 0, 0)')
            ctx.fillStyle = band
            ctx.fillRect(-width, -height * 0.22, width * 2, height * 0.44)
            ctx.restore()

            stars.forEach((star) => {
                if (moving) {
                    star.x += star.vx * 0.016
                    star.y += star.vy * 0.016
                    if (star.x < -4) star.x = width + 4
                    if (star.x > width + 4) star.x = -4
                    if (star.y < -4) star.y = height + 4
                    if (star.y > height + 4) star.y = -4
                }
                const twinkle = 0.72 + Math.sin(time * 0.8 + star.phase) * 0.28
                ctx.fillStyle = `rgba(214, 214, 220, ${star.alpha * twinkle})`
                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                ctx.fill()
            })

            const moonX = width * 0.14
            const moonY = height * 0.22
            const moonR = Math.min(width, height) * 0.11

            const glow = ctx.createRadialGradient(moonX, moonY, moonR * 0.6, moonX, moonY, moonR * 2.4)
            glow.addColorStop(0, 'rgba(140, 140, 148, 0.16)')
            glow.addColorStop(1, 'rgba(0, 0, 0, 0)')
            ctx.fillStyle = glow
            ctx.beginPath()
            ctx.arc(moonX, moonY, moonR * 2.4, 0, Math.PI * 2)
            ctx.fill()

            ctx.save()
            ctx.beginPath()
            ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2)
            ctx.clip()
            ctx.fillStyle = 'rgb(126, 126, 132)'
            ctx.fillRect(moonX - moonR, moonY - moonR, moonR * 2, moonR * 2)
            ctx.globalCompositeOperation = 'destination-out'
            ctx.beginPath()
            ctx.arc(moonX + moonR * 0.46, moonY - moonR * 0.08, moonR * 0.84, 0, Math.PI * 2)
            ctx.fill()
            ctx.restore()
        }

        const loop = (now: number) => {
            if (!running) return
            if (!lastTick) lastTick = now
            elapsed += Math.min(0.05, (now - lastTick) / 1000)
            lastTick = now
            draw(elapsed, true)
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
        draw(0, false)

        const resizeObserver = new ResizeObserver(() => {
            resize()
            draw(elapsed, false)
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

export default NightSky
