'use client'
import { useEffect, useRef } from 'react'

type Star = {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    phase: number
    bright: number
    cluster: number
}

const random = (seed: number) => {
    let value = seed
    return () => {
        value = (value * 1664525 + 1013904223) % 4294967296
        return value / 4294967296
    }
}

const buildSky = (width: number, height: number) => {
    const next = random(27)
    const stars: Star[] = []
    const columns = 3
    const rows = Math.max(8, Math.round(height / 200))

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
        const cluster = row * columns + column
        const originX = ((column + 0.5) / columns) * width + (next() - 0.5) * 70
        const originY = ((row + 0.5) / rows) * height + (next() - 0.5) * 36
        const angle = next() * Math.PI * 2
        const speed = 28 + next() * 30
        const vx = Math.cos(angle) * speed
        const vy = Math.sin(angle) * speed
        const count = 8 + Math.floor(next() * 4)

        for (let index = 0; index < count; index++) {
            stars.push({
                x: originX + (next() - 0.5) * 150,
                y: originY + (next() - 0.5) * 110,
                vx,
                vy,
                radius: 1.15 + next() * 1.55,
                phase: next() * Math.PI * 2,
                bright: 0.55 + next() * 0.45,
                cluster,
            })
        }
        }
    }

    const dust = Math.round((width * height) / 2800)
    for (let index = 0; index < dust; index++) {
        const angle = next() * Math.PI * 2
        const speed = 14 + next() * 28
        stars.push({
            x: next() * width,
            y: next() * height,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            radius: 0.55 + next() * 1.05,
            phase: next() * Math.PI * 2,
            bright: 0.35 + next() * 0.5,
            cluster: -1,
        })
    }

    const links: Array<[number, number]> = []
    const seen = new Set<string>()
    stars.forEach((star, index) => {
        if (star.cluster < 0) return
        const nearest = stars
            .map((other, otherIndex) => {
                const dx = star.x - other.x
                const dy = star.y - other.y
                return { otherIndex, distance: Math.hypot(dx, dy) }
            })
            .filter((item) =>
                item.otherIndex !== index &&
                stars[item.otherIndex].cluster === star.cluster &&
                item.distance < 130
            )
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 2)

        nearest.forEach((item) => {
            const key = [index, item.otherIndex].sort((a, b) => a - b).join('-')
            if (seen.has(key)) return
            seen.add(key)
            links.push([index, item.otherIndex])
        })
    })

    return { stars, links }
}

const Constellation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const parent = canvas?.parentElement
        if (!canvas || !parent) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        let frame = 0
        let request = 0
        let running = false
        let stars: Star[] = []
        let links: Array<[number, number]> = []

        const resize = () => {
            const { width, height } = parent.getBoundingClientRect()
            const dpr = Math.min(window.devicePixelRatio || 1, 1.25)
            canvas.width = Math.max(1, Math.floor(width * dpr))
            canvas.height = Math.max(1, Math.floor(height * dpr))
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            const sky = buildSky(width, height)
            stars = sky.stars
            links = sky.links
        }

        const wrap = (value: number, size: number) => {
            const span = size + 80
            let nextValue = value
            while (nextValue < -40) nextValue += span
            while (nextValue > size + 40) nextValue -= span
            return nextValue
        }

        const step = (width: number, height: number) => {
            const moved = new Set<number>()
            stars.forEach((star) => {
                if (star.cluster >= 0) {
                    if (moved.has(star.cluster)) return
                    moved.add(star.cluster)
                    const members = stars.filter((item) => item.cluster === star.cluster)
                    members.forEach((item) => {
                        item.x += star.vx * 0.016
                        item.y += star.vy * 0.016
                    })
                    const centerX = members.reduce((sum, item) => sum + item.x, 0) / members.length
                    const centerY = members.reduce((sum, item) => sum + item.y, 0) / members.length
                    const shiftX = wrap(centerX, width) - centerX
                    const shiftY = wrap(centerY, height) - centerY
                    if (shiftX || shiftY) {
                        members.forEach((item) => {
                            item.x += shiftX
                            item.y += shiftY
                        })
                    }
                    return
                }

                star.x = wrap(star.x + star.vx * 0.016, width)
                star.y = wrap(star.y + star.vy * 0.016, height)
            })
        }

        const draw = (time: number, moving: boolean) => {
            const width = canvas.clientWidth
            const height = canvas.clientHeight
            if (moving) step(width, height)

            ctx.clearRect(0, 0, width, height)
            ctx.fillStyle = '#000000'
            ctx.fillRect(0, 0, width, height)

            ctx.lineWidth = 1
            links.forEach(([from, to]) => {
                const start = stars[from]
                const end = stars[to]
                const dx = end.x - start.x
                const dy = end.y - start.y
                if (dx * dx + dy * dy > 150 * 150) return
                const pulse = 0.55 + 0.45 * Math.sin(time * 0.7 + start.phase)
                ctx.strokeStyle = `rgba(188, 188, 196, ${0.22 * pulse})`
                ctx.beginPath()
                ctx.moveTo(start.x, start.y)
                ctx.lineTo(end.x, end.y)
                ctx.stroke()
            })

            stars.forEach((star) => {
                const twinkle = star.cluster < 0
                    ? 0.75 + 0.25 * Math.sin(time * 0.5 + star.phase)
                    : 0.62 + 0.38 * Math.sin(time * 1.15 + star.phase)
                ctx.fillStyle = `rgba(228, 228, 232, ${star.bright * twinkle})`
                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                ctx.fill()
            })
        }

        const loop = () => {
            if (!running) return
            draw(frame, true)
            frame += 0.016
            request = requestAnimationFrame(loop)
        }

        const start = () => {
            if (running || reduced || document.hidden) return
            running = true
            loop()
        }

        const stop = () => {
            running = false
            cancelAnimationFrame(request)
        }

        resize()
        draw(0, false)

        const resizeObserver = new ResizeObserver(resize)
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

export default Constellation
