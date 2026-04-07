import React, { useState, useEffect } from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { contentEN, contentPTBR } from './Content'
import Title from '../common/title/Title';

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
            <Title text={props.language === "ptbr" ? contentPTBR.title : contentEN.title}/>
            <div id="courses-wrapper">
                {courses.map((course, index) => (
                    <div key={index} className={`${course.graduation && 'graduation-course'} course`}>
                        <div className="course-title">
                            <label className='title-text'>{course.title}</label>
                        </div>

                        <div className='course-details'>
                            <span className="course-date-range">{course.platform} | {course.start} {course.end && '-'} {course.end}</span>
                            <p className='course-description'>{course.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Courses
