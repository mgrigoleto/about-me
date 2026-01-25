import { HeaderContentItem } from './Content'
import './Item.css'

const HeaderItem = (props: HeaderContentItem) => {
    return (
        <a href={props.url} target="_blank">
            <label className='header-item'><>{props.icon}</> {props.title}</label>
        </a>
    )
}

export default HeaderItem
