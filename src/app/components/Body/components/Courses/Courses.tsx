'use client'
import React, { useState, useEffect, useRef } from 'react'
import { contentEN, contentPTBR, CoursesList } from './Content'
import Title from '../common/title/Title';
import SolarSystem from '../common/SolarSystem/SolarSystem';
import { assemble } from "../../assemble"

import "./Courses.css"

const Courses = (props: { language: string }) => {

    const [courses, setCourses] = useState(contentPTBR.list || []);

    useEffect(() => {
        if (props.language === "ptbr") {
            setCourses(contentPTBR.list || []);
        } else {
            setCourses(contentEN.list || []);
        }
    }, [props.language])

    return (
        <div className='courses-box'>
            <div className="dot-grid-bg">
                <SolarSystem />
            </div>
            <Title text={props.language === "ptbr" ? contentPTBR.title : contentEN.title} />
            <div id="courses-wrapper">
                {courses.map((course, index) => (
                    <CourseCard key={index} course={course} step={index % 3} />
                ))}
            </div>
        </div>
    )
}

const CourseCard = ({ course, step }: { course: CoursesList, step: number }) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const glareRef = useRef<HTMLSpanElement>(null)

    const tilt = (event: React.PointerEvent<HTMLDivElement>) => {
        const card = cardRef.current
        const glare = glareRef.current
        if (!card || !glare) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

        const rect = card.getBoundingClientRect()
        const px = (event.clientX - rect.left) / rect.width
        const py = (event.clientY - rect.top) / rect.height
        const rotateY = (px - 0.5) * 14
        const rotateX = (0.5 - py) * 14

        card.style.transition = 'transform 0.06s linear, box-shadow 0.3s ease'
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
        glare.style.opacity = '1'
        glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255, 255, 255, 0.24), transparent 25%)`
    }

    const reset = () => {
        const card = cardRef.current
        const glare = glareRef.current
        if (!card || !glare) return

        card.style.transition = 'transform 0.45s ease, box-shadow 0.3s ease'
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        glare.style.opacity = '0'
    }

    return (
        <div className="course-tilt" {...assemble(step)} onPointerMove={tilt} onPointerLeave={reset}>
            <div
                ref={cardRef}
                className={`${course.graduation ? 'graduation-course' : ''} course`}
            >
                <div className="course-title">
                    <label className='title-text'>{course.title}</label>
                </div>

                <div className='course-details'>
                    <span className="course-date-range">{course.platform} | {course.start} {course.end && '-'} {course.end}</span>
                    <p className='course-description'>{course.description}</p>
                </div>
                <span ref={glareRef} className="course-glare" aria-hidden="true" />
            </div>
        </div>
    )
}

export default Courses
