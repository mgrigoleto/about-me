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

    const buildLineWing = (left: boolean) => {
        return (
            <>
                {
                    left && <span className="left-bottom-line-wing" />
                }
                <span className={`bottom-exp-line ${left ? 'left-side-line' : 'right-side-line'}`} />
                {
                    !left && <span className="right-bottom-line-wing" />
                }
            </>
        )
    }

    return (
        <div className='black-box'>
            <h1> <FaBriefcase /> {props.language === "ptbr" ? contentPTBR.title : contentEN.title}</h1>
            <div id="experience-timeline">
                <div id="start-point">
                    <FaFlagCheckered />
                </div>
                {exps.map((exp, index) => {
                    const left = index % 2 == 0
                    const right = index % 2 != 0

                    return (
                        <div key={index} className="timeline-line">
                            {right && <div className="spacer"></div>}
                            <div
                                className={`
                                    ${left ?
                                        'left-side' : 'right-side'} 
                                                 experience-item`}
                            >
                                <h3 className="title">{exp.title}</h3>
                                <p className="company">{exp.company}</p>
                                <p className="date-range">
                                    {exp.start} {exp.end && '-'} {exp.end}
                                </p>
                                <p className="description">{exp.description}</p>
                                <span className={`${left ? 'left-side-point' : 'right-side-point'}`}>
                                    <FaCircleDot />
                                </span>

                                {/* Wing comming out of the timeline */}
                                {buildLineWing(left)}
                            </div>
                            {left && <div className="spacer"></div>}
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Experience
