'use client'
import Courses from "./components/Courses/Courses"
import Experience from "./components/Experience/Experience"
import Introduction from "./components/Introduction/Introduction"
import "./Container.css"

const Container = (props: { language: string }) => {
    return (
        <>
            <Introduction language={props.language} />
            <Experience language={props.language} />
            <Courses language={props.language} />
        </>
    )
}

export default Container
