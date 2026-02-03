import React, { useState, useEffect } from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { contentEN, contentPTBR } from './Content'

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
        <div className='solid-blue-box'>
            <h1> <FaGraduationCap /> {props.language === "ptbr" ? contentPTBR.title : contentEN.title}</h1>
            <div id="courses-wrapper">
                {courses.map((course, index) => (
                    <div key={index} className="course">
                        <h2 className='course-title'>{course.title}</h2>
                        <h4 className='platform'>{course.platform}</h4>
                        <span className="date-range">{course.start} {course.end && '-'} {course.end}</span>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Courses
