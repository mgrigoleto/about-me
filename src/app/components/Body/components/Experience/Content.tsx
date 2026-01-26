import { title } from "process"

export type ExperienceContent = {
    title?: string,
    list?: ExperienceList[]
}

export type ExperienceList = {
    title?: string,
    company?: string,
    start?: string,
    end?: string,
    description?: string
}

// content must have a final empty object to fit the timeline structure

export const contentPTBR: ExperienceContent = {
    title: "Experiência Profissional",
    list: [
        {
            title: "Axuliar de Tecnologia",
            company: "The Wellignton Extintores",
            start: "Junho de 2021",
            end: "Fevereiro de 2022",
            description: "Orientações sobre uso de sistemas web, gerenciamento de mídias sociais, manutenções e reparos em computadores. Design de propagandas, rótulos, logomarca e afins."
        },
        {
            title: "Operador de Suporte Técnico",
            company: "Loga Internet",
            start: "Junho de 2022",
            end: "Abril de 2023",
            description: "Suporte técnico em redes. Identificando e solucionando problemas de conexão com a Internet."
        },
        {
            title: "Estagiário de TI",
            company: "Macroex Comercial Importadora e Exportadora",
            start: "Julho de 2023",
            end: "Janeiro de 2024",
            description: "Prototipagem, desenvolvimento e hospedagem de Aplicações Web. Gerenciamento de banco de dados. Desenvolvimento de APIs. Configurações de sistemas internos."
        },
        {
            title: "Desenvolvedor Full-Stack Jr.",
            company: "Macroex Comercial Importadora e Exportadora",
            start: "Janeiro de 2024",
            end: "Abril de 2025",
            description: "Desenvolvimento e manutenção de Aplicações Web. Criação e otimização de APIs. Gerenciamento de banco de dados. Implementação de novas funcionalidades e integrações entre múltiplas aplicações."
        },
        {
            title: "Desenvolvedor Frontend Jr.",
            company: "Quattror Comercial",
            start: "Outubro de 2025",
            end: "Atualmente",
            description: "Desenvolvimento de interfaces web responsivas e interativas. Implementação de componentes reutilizáveis e manutenção de aplicações existentes."
        },
        {
            title: "",
            company: "",
            start: "",
            end: "",
            description: ""
        }
    ]
}

export const contentEN: ExperienceContent = {
    title: "Professional Experience",
    list:[
        {
            title: "IT Assistant",
            company: "The Wellington Extintores",
            start: "June 2021",
            end: "February 2022",
            description: "Guidance on web system usage, social media management, and computer maintenance and repair. Design of advertisements, labels, logos, and related materials."
        },
        {
            title: "Technical Support Operator",
            company: "Loga Internet",
            start: "June 2022",
            end: "April 2023",
            description: "Technical network support. Identifying and troubleshooting internet connection issues."
        },
        {
            title: "IT Intern",
            company: "Macroex Comercial Importadora e Exportadora",
            start: "July 2023",
            end: "January 2024",
            description: "Prototyping, development, and hosting of Web Applications. Database management. API development. Internal system configuration."
        },
        {
            title: "Junior Full-Stack Developer",
            company: "Macroex Comercial Importadora e Exportadora",
            start: "January 2024",
            end: "April 2025",
            description: "Development and maintenance of Web Applications. Creation and optimization of APIs. Database management. Implementation of new features and integrations between multiple applications."
        },
        {
            title: "Junior Frontend Developer",
            company: "Quattror Comercial",
            start: "October 2025",
            end: "Present",
            description: "Development of responsive and interactive web interfaces. Implementation of reusable components and maintenance of existing applications."
        },
        {
            title: "",
            company: "",
            start: "",
            end: "",
            description: ""
        }
    ]
}