import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { contentEN, contentPTBR } from './Content'

const Courses = (props: { language: string }) => {
    return (
        <div className='solid-blue-box'>
            <h1> <FaGraduationCap /> {props.language === "ptbr" ? contentPTBR.title : contentEN.title}</h1>
        </div>
    )
}

export default Courses
