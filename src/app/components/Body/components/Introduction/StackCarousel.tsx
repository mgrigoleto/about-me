import { CSSProperties } from "react"
import { IconType } from "react-icons"
import { DiMsqlServer } from "react-icons/di"
import {
    SiConfluence,
    SiDotnet,
    SiExpress,
    SiFigma,
    SiFlask,
    SiGimp,
    SiGithub,
    SiGitlab,
    SiJavascript,
    SiJira,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiOracle,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiReact,
    SiSequelize,
    SiSharp,
    SiTypescript,
} from "react-icons/si"
import { TbBrandAzure, TbBrandReactNative } from "react-icons/tb"
import "./StackCarousel.css"

type Stack = {
    name: string
    icon?: IconType
    mark?: string
}

const inner: Stack[] = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "C#", icon: SiSharp },
    { name: ".NET", icon: SiDotnet },
    { name: "Python", icon: SiPython },
    { name: "React Native", icon: TbBrandReactNative },
]

const outer: Stack[] = [
    { name: "Express", icon: SiExpress },
    { name: "Prisma", icon: SiPrisma },
    { name: "Sequelize", icon: SiSequelize },
    { name: "Entity Framework", mark: "EF" },
    { name: "Flask", icon: SiFlask },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "SQL Server", icon: DiMsqlServer },
    { name: "Oracle", icon: SiOracle },
    { name: "GLPI", mark: "GLPI" },
    { name: "Figma", icon: SiFigma },
    { name: "GIMP", icon: SiGimp },
    { name: "Azure", icon: TbBrandAzure },
    { name: "Confluence", icon: SiConfluence },
    { name: "Jira", icon: SiJira },
    { name: "GitLab", icon: SiGitlab },
    { name: "GitHub", icon: SiGithub },
]

const OrbitNode = ({ stack, index, count }: { stack: Stack, index: number, count: number }) => {
    const Icon = stack.icon
    return (
        <div
            className="orbit-node"
            style={{ "--i": index, "--count": count } as CSSProperties}
        >
            <button type="button" className="orbit-face">
                {Icon ? <Icon aria-hidden="true" /> : <span className="orbit-mark">{stack.mark}</span>}
                <span className="orbit-label">{stack.name}</span>
            </button>
        </div>
    )
}

const StackOrbit = () => {
    return (
        <div className="orbit" aria-label="Stacks e ferramentas" data-assemble="">
            <div className="orbit-core" aria-hidden="true" />
            <div className="orbit-ring">
                {outer.map((stack, index) => (
                    <OrbitNode key={stack.name} stack={stack} index={index} count={outer.length} />
                ))}
            </div>
            <div className="orbit-ring orbit-ring-inner">
                {inner.map((stack, index) => (
                    <OrbitNode key={stack.name} stack={stack} index={index} count={inner.length} />
                ))}
            </div>
        </div>
    )
}

export default StackOrbit
