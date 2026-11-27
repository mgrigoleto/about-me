'use client'
import { useEffect } from "react"
import "./reveal.css"

const Assemble = () => {
    useEffect(() => {
        const nodes = document.querySelectorAll<HTMLElement>("[data-assemble]")
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            nodes.forEach((node) => node.classList.add("is-in"))
            return
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return
                entry.target.classList.add("is-in")
                observer.unobserve(entry.target)
            })
        }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" })

        nodes.forEach((node) => observer.observe(node))
        return () => observer.disconnect()
    }, [])

    return null
}

export default Assemble
