import { items } from "./Content"
import HeaderItem from './Item'
import "./Header.css"

const Header = () => {

    return (
        <div id="header">
            {items.map((item, index) => (
                <HeaderItem key={index} title={item.title} url={item.url} icon={item.icon} />
            ))}
        </div>
    )
}

export default Header
