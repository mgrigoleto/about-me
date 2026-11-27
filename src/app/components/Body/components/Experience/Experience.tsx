'use client'
import "./Experience.css"
import { useEffect, useState } from "react"
import { contentEN, contentPTBR } from "./Content"
import Title from '../common/title/Title';
import Constellation from "../common/Constellation/Constellation"
import { assemble } from "../../assemble"

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
            <div className="dot-grid-bg">
                <Constellation />
            </div>
            <Title text={props.language === "ptbr" ? contentPTBR.title : contentEN.title} />
            <div id="experience-timeline">
                <div id="start-point">
                    <span className="timeline-star timeline-star-start" />
                </div>
                {exps.map((exp, index) => {
                    const left = index % 2 == 0
                    const right = index % 2 != 0

                    return (
                        <div key={index} className="timeline-line">
                            {right && <div className="spacer"></div>}
                            <div
                                className={`${left ? "left-side" : "right-side"} experience-item`}
                                {...assemble(index % 2)}
                            >
                                <h3 className="title">{exp.title}</h3>
                                <p className="company">{exp.company}</p>
                                <p className="date-range">
                                    {exp.start} {exp.end && '-'} {exp.end}
                                </p>
                                <p className="description">{exp.description}</p>
                                <span className="timeline-node">
                                    <span className="timeline-star" />
                                </span>
                                <span className="timeline-branch" />
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
