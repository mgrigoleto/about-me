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
                        <div className="course-title">
                            <span className='title-icon'><>{course.icon}</></span>
                            <span className='title-text'>{course.title}</span>
                        </div>
                        <h4 className='course-platform'><FaGraduationCap style={{fontSize: '22px'}}/> {course.platform}</h4>
                        <span className="course-date-range">{course.start} {course.end && '-'} {course.end}</span>
                        <p className='course-description'>{course.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Courses
