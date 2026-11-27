import { HeaderContentItem } from './Content'
import './Item.css'

const HeaderItem = (props: HeaderContentItem) => {
    return (
        <a className="header-item" href={props.url} target="_blank" rel="noreferrer" aria-label={props.title}>
            {props.icon}
            <span>{props.title}</span>
        </a>
    )
}

export default HeaderItem
