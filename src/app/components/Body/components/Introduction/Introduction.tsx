'use client'
import { contentEN, contentPTBR } from "./Content"
import "./Introduction.css"
import "../../Container.css"
import { useEffect, useState } from "react"

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
        <div className="gradient-blue-box">
            <div id="img-div">
                <img id="pfp" src={"pfp.png"} />
                <h1>{intro.name}</h1>
                <h3>{intro.email}</h3>
            </div>
            <div id="about-me-div">
                <p>
                    {intro.intro}
                </p>
                <p>
                    {intro.listTitle}
                </p>
                <ul id="intro-list">
                    {intro.list.map((item, index) => (
                        <li key={index}><>{item.icon}</>{item.text}</li>
                    ))}
                </ul>
                <p>{intro.outro}</p>
            </div>
        </div>
    )
}

export default Introduction
