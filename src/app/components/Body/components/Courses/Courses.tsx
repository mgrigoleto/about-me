import React, { useState, useEffect } from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { contentEN, contentPTBR } from './Content'
import Title from '../common/title/Title';

import "./Courses.css"
import DotGrid from '../common/DotGridBackground/DotGrid';

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
                <DotGrid
                    dotSize={4}
                    gap={15}
                    baseColor="#110e16"
                    activeColor="#302d3a"
                    proximity={120}
                    shockRadius={50}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>
            <Title text={props.language === "ptbr" ? contentPTBR.title : contentEN.title} />
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
