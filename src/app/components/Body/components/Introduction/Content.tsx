import { JSX } from "react"
import { IconType } from "react-icons"
import { FaDatabase, FaGraduationCap, FaLaptopCode, FaPencilRuler, FaProjectDiagram, FaUserGraduate } from "react-icons/fa"

export type IntroductionHighlight = {
    value: string,
    label: string
}

export type IntroductionContent = {
    name: string,
    role: string,
    email: string,
    intro?: string,
    listTitle?: string,
    highlights: IntroductionHighlight[],
    list: InfoList[],
    outro?: string
}

export type InfoList = {
    icon?: IconType | JSX.Element,
    text: string
}

const getYearsDiff = (year: number): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
};

export const contentPTBR: IntroductionContent = {
    name: "Maurício Grigoleto Belinassi",
    role: "Desenvolvedor Full-Stack",
    email: "grigoleto.2002@gmail.com",
    intro: "Desenvolvo aplicações web e APIs, da análise do problema até a interface. Também trabalho com bancos de dados e prototipagem.",
    listTitle: "Por onde eu passo",
    highlights: [
        { value: `${getYearsDiff(2021)}+`, label: "anos em TI" },
        { value: `${getYearsDiff(2023)}+`, label: "anos desenvolvendo" },
        { value: "EN", label: "inglês fluente" },
    ],
    list: [
        {
            icon: <FaDatabase />,
            text: "APIs em várias linguagens"
        },
        {
            icon: <FaLaptopCode />,
            text: "Aplicações web"
        },
        {
            icon: <FaProjectDiagram />,
            text: "Requisitos e modelagem de dados"
        },
        {
            icon: <FaPencilRuler />,
            text: "Prototipagem de interfaces"
        },
        {
            icon: <FaUserGraduate />,
            text: "Técnico em Informática para Internet"
        },
        {
            icon: <FaGraduationCap />,
            text: "Graduando em Sistemas de Informação"
        },
    ],
    outro: "Mais abaixo, a experiência e os cursos."
}

export const contentEN: IntroductionContent = {
    name: "Maurício Grigoleto Belinassi",
    role: "Full-Stack Developer",
    email: "grigoleto.2002@gmail.com",
    intro: "I build web applications and APIs, from the problem through the interface. That includes databases and prototyping.",
    listTitle: "What I work with",
    highlights: [
        { value: `${getYearsDiff(2021)}+`, label: "years in IT" },
        { value: `${getYearsDiff(2023)}+`, label: "years coding" },
        { value: "EN", label: "fluent English" },
    ],
    list: [
        {
            icon: <FaDatabase />,
            text: "APIs in multiple languages"
        },
        {
            icon: <FaLaptopCode />,
            text: "Web applications"
        },
        {
            icon: <FaProjectDiagram />,
            text: "Requirements and data modeling"
        },
        {
            icon: <FaPencilRuler />,
            text: "Interface prototyping"
        },
        {
            icon: <FaUserGraduate />,
            text: "Internet Informatics Technician"
        },
        {
            icon: <FaGraduationCap />,
            text: "Information Systems undergraduate"
        },
    ],
    outro: "Further down, the experience and the courses."
}