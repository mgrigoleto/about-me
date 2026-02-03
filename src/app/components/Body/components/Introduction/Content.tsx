import { JSX } from "react"
import { IconType } from "react-icons"
import { FaBolt, FaCode, FaDatabase, FaFlagUsa, FaProjectDiagram, FaUserGraduate } from "react-icons/fa"
import { LuMonitorStop } from "react-icons/lu"
import { MdWork } from "react-icons/md"
import { RiRobot2Fill } from "react-icons/ri"

export type IntroductionContent = {
    name: string,
    email: string,
    intro?: string,
    listTitle?: string,
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
    email: "grigoleto.2002@gmail.com",
    intro: "Prazer, meu nome é Maurício e sou Desenvolvedor Full-Stack.",
    listTitle: "Algumas das minhas qualificações incluem:",
    list: [
        {
            icon: <MdWork />,
            text: `Mais de ${getYearsDiff(2021)} anos de experiência profissional em TI;`
        },
        {
            icon: <FaCode />,
            text: `${getYearsDiff(2023)} anos trabalhando como desenvolvedor;`
        },
        {
            icon: <FaDatabase />,
            text: `Desenvolvimento de APIs em múltiplas linguagens;`
        },
        {
            icon: <LuMonitorStop />,
            text: `Desenvolvimento de Aplicações Web Dinâmicas;`
        },
        {
            icon: <FaProjectDiagram />,
            text: `Análise de requisitos e modelagem de dados;`
        },
        {
            icon: <RiRobot2Fill />,
            text: `Automações com Python;`
        },
        {
            icon: <FaUserGraduate />,
            text: `Técnico em Informática para Internet;`
        },
        {
            icon: <FaUserGraduate />,
            text: `Graduando em Sistemas de Informação;`
        },
        {
            icon: <FaFlagUsa />,
            text: `Fluente em Inglês;`
        }
    ],
    outro: "e muito mais..."
}

export const contentEN: IntroductionContent = {
    name: "Maurício Grigoleto Belinassi",
    email: "grigoleto.2002@gmail.com",
    intro: "Howdy! My name is Maurício and I'm a Full-Stack Developer.",
    listTitle: "Some of my qualifications include:",
    list: [
        {
            icon: <MdWork />,
            text: `Over ${getYearsDiff(2021)} years of experience in IT;`
        },
        {
            icon: <FaCode />,
            text: `${getYearsDiff(2023)} years of experience in IT;`
        },
        {
            icon: <FaDatabase />,
            text: `API development in multiple languages;`
        },
        {
            icon: <LuMonitorStop />,
            text: `Dynamic Web Application development;`
        },
        {
            icon: <FaProjectDiagram />,
            text: `Requirements analysis and data modeling;`
        },
        {
            icon: <RiRobot2Fill />,
            text: `Automation with Python;`
        },
        {
            icon: <FaUserGraduate />,
            text: `Internet Informatics Technician;`
        },
        {
            icon: <FaUserGraduate />,
            text: `Undergraduate in Information Systems;`
        },
        {
            icon: <FaFlagUsa  />,
            text: `Fluent in English;`
        }
    ],
    outro: "and much more..."
}