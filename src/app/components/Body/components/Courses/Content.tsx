import { IconType } from "react-icons"
import { FaDatabase } from "react-icons/fa"
import { FaLaptopCode } from "react-icons/fa6"
import { TbCloudComputing } from "react-icons/tb"
import { JSX } from "react/jsx-dev-runtime"

export type CoursesContent = {
    title?: string,
    list?: CoursesList[]
}

export type CoursesList = {
    icon?: IconType | JSX.Element,
    graduation?: boolean,
    title?: string,
    platform?: string,
    start?: string,
    end?: string,
    description?: string
}

export const contentPTBR: CoursesContent = {
    title: "Graduação e Cursos",
    list: [
        {
            title: "Técnico em Informática para Internet",
            graduation: true,
            platform: "IFES",
            start: "01/2018",
            end: "12/2021",
            description: "Formação técnica em infraestrutura e desenvolvimento, incluindo redes, sistemas operacionais, servidores, segurança da informação e desenvolvimento de aplicações web."
        },
        {
            title: "Bacharelado em Sistemas de Informação",
            graduation: true,
            platform: "Multivix",
            start: "01/2022",
            end: "Presente",
            description: "Formação em gestão de TI e desenvolvimento de software, com foco em análise de requisitos, bancos de dados, arquitetura de sistemas e criação de soluções web e mobile com metodologias ágeis."
        },
        {
            icon: <TbCloudComputing />,
            title: "IT Essentials",
            platform: "Cisco",
            start: "01/2022",
            end: "12/2022",
            description: "Domínio dos fundamentos de arquitetura de hardware e software, configuração de redes e protocolos de segurança cibernética. Capacitação técnica voltada para a manutenção preventiva e resolução de problemas complexos em sistemas computacionais."
        },
        {
            icon: <FaLaptopCode  />,
            title: "JavaScript Essentials",
            platform: "Cisco",
            start: "01/2023",
            end: "03/2023",
            description: "Desenvolvimento de lógica de programação e algoritmos utilizando JavaScript. Foco em manipulação de tipos de dados, estruturas de controle e funções, estabelecendo a base para o desenvolvimento de aplicações web dinâmicas."
        },
        {
            icon: <FaDatabase />,
            title: "Big Data em Apoio à Tomada de Decisões",
            platform: "ENAP",
            start: "03/2023",
            end: "05/2023",
            description: "Análise estratégica de grandes volumes de dados (Big Data) aplicados à gestão pública e privada. Estudo de padrões e processamento de informações para otimização de processos e suporte à decisão baseada em dados."
        },
        {
            icon: <FaLaptopCode  />,
            title: "Learning with Python",
            platform: "ENAP",
            start: "04/2023",
            end: "05/2023",
            description: "Imersão na linguagem Python, abrangendo desde a sintaxe e semântica fundamental até a implementação de soluções modernas. Capacitação no uso de bibliotecas e estruturas de dados para automação e desenvolvimento de sistemas."
        },
        {
            icon: <FaLaptopCode  />,
            title: "Design Centrado no Usuário",
            platform: "PUCRS",
            start: "06/2023",
            end: "07/2023",
            description: "Especialização em User Experience (UX) fundamentada na metodologia de Don Norman. Foco em usabilidade, arquitetura de informação e processos de design que priorizam a jornada e a satisfação do usuário final."
        },
        {
            icon: <FaLaptopCode  />,
            title: "C# e Programação Orientada a Objetos",
            platform: "Udemy",
            start: "05/2024",
            end: "11/2024",
            description: "Aperfeiçoamento em desenvolvimento backend e arquitetura de sistemas utilizando C#. Domínio avançado de Programação Orientada a Objetos (POO) e construção de APIs RESTful escaláveis e eficientes."
        },
        {
            icon: <FaLaptopCode  />,
            title: "Complete Web & Mobile Designer: UI/UX & Figma",
            platform: "Udemy",
            start: "11/2025",
            end: "12/2025",
            description: "Especialização em design de interfaces (UI) e experiência do usuário (UX) com foco em produtos digitais. Domínio avançado de Figma, prototipagem de alta fidelidade e aplicação de princípios visuais para web e mobile."
        }
    ]
}

export const contentEN: CoursesContent = {
    title: 'Graduation and Courses',
    list: [
        {
            title: "Internet Informatics Technician",
            graduation: true,
            platform: "IFES",
            start: "01/2018",
            end: "12/2021",
            description: "Technical training in infrastructure and development, covering networks, operating systems, servers, information security, and web application development."
        },
        {
            title: "Bachelor of Information Systems",
            graduation: true,
            platform: "Multivix",
            start: "01/2022",
            end: "Present",
            description: "Focus on IT management and software development, including requirements analysis, database design, systems architecture, and web/mobile solutions using agile practices."
        },
        {
            icon: <TbCloudComputing />,
            title: "IT Essentials",
            platform: "Cisco",
            start: "01/2022",
            end: "12/2022",
            description: "Foundations of hardware/software architecture, network configuration, and cybersecurity. Focused on preventive maintenance and complex technical troubleshooting."
        },
        {
            icon: <FaLaptopCode  />,
            title: "JavaScript Essentials",
            platform: "Cisco",
            start: "01/2023",
            end: "03/2023",
            description: "Programming logic and algorithms using JavaScript. Focus on data manipulation, control structures, and functions for dynamic web development."
        },
        {
            icon: <FaDatabase />,
            title: "Big Data for Decision Making",
            platform: "ENAP",
            start: "03/2023",
            end: "05/2023",
            description: "Strategic analysis of Big Data applied to public and private management. Study of data patterns and processing to optimize decision-making."
        },
        {
            icon: <FaLaptopCode  />,
            title: "Learning with Python",
            platform: "ENAP",
            start: "04/2023",
            end: "05/2023",
            description: "Immersion in Python syntax, semantics, and data structures. Developed skills in automation, library usage, and modern software solutions."
        },
        {
            icon: <FaLaptopCode  />,
            title: "User-Centered Design",
            platform: "PUCRS",
            start: "06/2023",
            end: "07/2023",
            description: "Specialization in UX based on Don Norman’s methodology. Focus on usability, information architecture, and user-centric design processes."
        },
        {
            icon: <FaLaptopCode  />,
            title: "C# and Object-Oriented Programming",
            platform: "Udemy",
            start: "05/2024",
            end: "11/2024",
            description: "Advanced backend development and system architecture using C#. Mastery of OOP principles and the creation of scalable RESTful APIs."
        },
        {
            icon: <FaLaptopCode  />,
            title: "Complete Web & Mobile Designer: UI/UX & Figma",
            platform: "Udemy",
            start: "11/2025",
            end: "12/2025",
            description: "UI/UX specialization for digital products. Mastery of Figma, high-fidelity prototyping, and visual design principles for web and mobile."
        }
    ]
}