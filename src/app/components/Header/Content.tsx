import { JSX } from "react";
import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export type HeaderContentItem = {
    title: string;
    url?: string;
    icon?: IconType | JSX.Element;
};

export const items: HeaderContentItem[] = [
    {
        title: "Linkedin",
        url: "https://www.linkedin.com/in/maur%C3%ADcio-grigoleto-794366228/",
        icon: <FaLinkedin />
    },
    {
        title: "GitHub",
        url: "https://github.com/mgrigoleto",
        icon: <FaGithub />
    },
    {
        title: "E-mail",
        url: "mailto:grigoleto.2002@gmail.com",
        icon: <FaEnvelope />
    },
]