'use client'
import { contentEN, contentPTBR } from "./Content"
import "../../Container.css"
import "./Introduction.css"
import { useEffect, useState } from "react"
import NightSky from "../common/NightSky/NightSky"
import StackOrbit from "./StackCarousel"
import { assemble } from "../../assemble"

const Introduction = (props: { language: string }) => {

    const [intro, setIntro] = useState(contentPTBR);

    useEffect(() => {
        if (props.language === "ptbr") {
            setIntro(contentPTBR);
        } else {
            setIntro(contentEN);
        }
    }, [props.language])

    return (
        <div className="introdutcion-box">
            <section className="beams-grid-bg">
                <NightSky />
            </section>
            <div className="intro-layout">
                <div className="intro-identity">
                    <div className="intro-portrait" {...assemble(0)}>
                        <img id="pfp" src="pfp.png" alt={intro.name} />
                    </div>
                    <p className="intro-role" {...assemble(1)}>{intro.role}</p>
                    <h1 {...assemble(2)}>{intro.name}</h1>
                    <a className="intro-email" href={`mailto:${intro.email}`} {...assemble(3)}>{intro.email}</a>
                </div>
                <div id="about-me-div">
                    <p className="intro-lead" {...assemble(1)}>{intro.intro}</p>
                    <ul className="intro-stats">
                        {intro.highlights.map((item, index) => (
                            <li key={index} {...assemble(index)}>
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="intro-kicker" {...assemble(0)}>{intro.listTitle}</p>
                    <ul id="intro-list">
                        {intro.list.map((item, index) => (
                            <li key={index} {...assemble(index % 2)}>{item.icon}<span>{item.text}</span></li>
                        ))}
                    </ul>
                    <p className="intro-outro" {...assemble(1)}>{intro.outro}</p>
                </div>
            </div>
            <StackOrbit />
        </div>
    )
}

export default Introduction
