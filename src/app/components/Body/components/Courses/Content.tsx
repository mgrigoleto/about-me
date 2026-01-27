
export type CoursesContent = {
    title?: string,
    list?: CoursesList[]
}

export type CoursesList = {
    title?: string,
    platform?: string,
    start?: string,
    end?: string,
    description?: string
}

export const contentPTBR: CoursesContent = {
    title: "Cursos",
    list: [
        {
            title: "IT Essentials",
            platform: "Cisco Networking Academy",
            start: "Janeiro de 2022",
            end: "Dezembro de 2022",
            description: "Domínio dos fundamentos de arquitetura de hardware e software, configuração de redes e protocolos de segurança cibernética. Capacitação técnica voltada para a manutenção preventiva e resolução de problemas complexos em sistemas computacionais."
        },
        {
            title: "JavaScript Essentials",
            platform: "Cisco Networking Academy",
            start: "Janeiro de 2023",
            end: "Março de 2023",
            description: "Desenvolvimento de lógica de programação e algoritmos utilizando JavaScript. Foco em manipulação de tipos de dados, estruturas de controle e funções, estabelecendo a base para o desenvolvimento de aplicações web dinâmicas."
        },
        {
            title: "Big Data em Apoio à Tomada de Decisões",
            platform: "ENAP",
            start: "Março de 2023",
            end: "Maio de 2023",
            description: "Análise estratégica de grandes volumes de dados (Big Data) aplicados à gestão pública e privada. Estudo de padrões e processamento de informações para otimização de processos e suporte à decisão baseada em dados."
        },
        {
            title: "Learning with Python",
            platform: "ENAP",
            start: "Abril de 2023",
            end: "Maio de 2023",
            description: "Imersão na linguagem Python, abrangendo desde a sintaxe e semântica fundamental até a implementação de soluções modernas. Capacitação no uso de bibliotecas e estruturas de dados para automação e desenvolvimento de sistemas."
        },
        {
            title: "Design Centrado no Usuário",
            platform: "PUCRS",
            start: "Junho de 2023",
            end: "Julho de 2023",
            description: "Especialização em User Experience (UX) fundamentada na metodologia de Don Norman. Foco em usabilidade, arquitetura de informação e processos de design que priorizam a jornada e a satisfação do usuário final."
        },
        {
            title: "C# e Programação Orientada a Objetos",
            platform: "Udemy",
            start: "Maio de 2024",
            end: "Novembro de 2024",
            description: "Aperfeiçoamento em desenvolvimento backend e arquitetura de sistemas utilizando C#. Domínio avançado de Programação Orientada a Objetos (POO) e construção de APIs RESTful escaláveis e eficientes."
        },
        {
            title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
            platform: "Udemy",
            start: "Novembro de 2025",
            end: "Dezembro de 2025",
            description: "Especialização em design de interfaces (UI) e experiência do usuário (UX) com foco em produtos digitais. Domínio avançado de Figma, prototipagem de alta fidelidade e aplicação de princípios visuais para web e mobile."
        }
    ]
}

export const contentEN: CoursesContent = {
    title: 'Courses',
    list: [
        {
            title: "IT Essentials",
            platform: "Cisco Networking Academy",
            start: "January 2022",
            end: "December 2022",
            description: "Foundations of hardware/software architecture, network configuration, and cybersecurity. Focused on preventive maintenance and complex technical troubleshooting."
        },
        {
            title: "JavaScript Essentials",
            platform: "Cisco Networking Academy",
            start: "January 2023",
            end: "March 2023",
            description: "Programming logic and algorithms using JavaScript. Focus on data manipulation, control structures, and functions for dynamic web development."
        },
        {
            title: "Big Data for Decision Making",
            platform: "ENAP",
            start: "March 2023",
            end: "May 2023",
            description: "Strategic analysis of Big Data applied to public and private management. Study of data patterns and processing to optimize decision-making."
        },
        {
            title: "Learning with Python",
            platform: "ENAP",
            start: "April 2023",
            end: "May 2023",
            description: "Immersion in Python syntax, semantics, and data structures. Developed skills in automation, library usage, and modern software solutions."
        },
        {
            title: "User-Centered Design",
            platform: "PUCRS",
            start: "June 2023",
            end: "July 2023",
            description: "Specialization in UX based on Don Norman’s methodology. Focus on usability, information architecture, and user-centric design processes."
        },
        {
            title: "C# and Object-Oriented Programming",
            platform: "Udemy",
            start: "May 2024",
            end: "November 2024",
            description: "Advanced backend development and system architecture using C#. Mastery of OOP principles and the creation of scalable RESTful APIs."
        },
        {
            title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
            platform: "Udemy",
            start: "November 2025",
            end: "December 2025",
            description: "UI/UX specialization for digital products. Mastery of Figma, high-fidelity prototyping, and visual design principles for web and mobile."
        }
    ]
}