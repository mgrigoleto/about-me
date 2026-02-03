'use client'
import { items } from "./Content"
import HeaderItem from './Item'
import "./Header.css"
import { US, BR } from "country-flag-icons/react/1x1"

const Header = (props: { setCurrLanguage: any, currLanguage: string }) => {

    return (
        <div id="header">
            {items.map((item, index) => (
                <HeaderItem key={index} title={item.title} url={item.url} icon={item.icon} />
            ))}

            <div id="language-select-div">
                <button className={props.currLanguage == "en" ? "active-language" : ""} onClick={() => props.setCurrLanguage("en")} title="English">
                    <US className="icon-language" />
                    EN
                </button>
                <button className={props.currLanguage == "ptbr" ? "active-language" : ""} onClick={() => props.setCurrLanguage("ptbr")} title="Português Brasil">
                    <BR className="icon-language" />
                    PT
                </button>
            </div>
        </div>
    )
}

export default Header
