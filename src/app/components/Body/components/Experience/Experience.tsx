'use client'
import "./Experience.css"
import "../../Container.css"
import { useEffect, useState } from "react"
import { contentEN, contentPTBR } from "./Content"
import { FaBriefcase, FaCircleDot } from "react-icons/fa6"
import { FaFlagCheckered } from "react-icons/fa"

const Experience = (props: { language: string }) => {

    const [exps, setExps] = useState(contentPTBR.list || []);

    useEffect(() => {
        if (props.language === "ptbr") {
            setExps(contentPTBR.list || []);
        } else {
            setExps(contentEN.list || []);
        }
    }, [props.language])

    return (
        <div className='black-box'>
            <h1> <FaBriefcase /> {props.language === "ptbr" ? contentPTBR.title : contentEN.title}</h1>
            <div id="experience-timeline">
                {exps.map((exp, index) => (
                    <div key={index} className="timeline-line">
                        {index % 2 != 0 && <div className="spacer"></div>}
                        <div className={`${index + 1 == exps.length && index % 2 != 0 && 'last-exp-right-side'} ${index + 1 == exps.length && index % 2 == 0 && 'last-exp-left-side'} ${index % 2 == 0 ? 'left-side' : 'right-side'} experience-item`}>
                            <span className={`${index % 2 == 0 ? 'left-side-point' : 'right-side-point'}`}>   {index == 0 ? <FaFlagCheckered /> : <FaCircleDot />}</span>
                            <h3 className="title">{exp.title}</h3>
                            <p className="company">{exp.company}</p>
                            <p className="date-range">{exp.start} {exp.end && '-'} {exp.end}</p>
                            <p className="description">{exp.description}</p>

                            {/* Wing comming out of the timeline */}
                            {index + 1 != exps.length &&
                                <>
                                    {index % 2 == 0 && <span className="left-bottom-line-wing"></span>}
                                    <span className={`bottom-exp-line  ${index % 2 == 0 ? 'left-side-line' : 'right-side-line'}`} ></span>
                                    {index % 2 != 0 && <span className="right-bottom-line-wing"></span>}
                                </>
                            }
                        </div>
                        {index % 2 == 0 && <div className="spacer"></div>}
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Experience
