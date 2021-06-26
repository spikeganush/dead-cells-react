import { NavLink } from 'react-router-dom'
import Banner from '../images/banner.jpg'
export function Header(props) {

    const SiteNav = props.navigation.map((item) => {
        return (
            <NavLink end to={item.link} className="nav-link" activeClassName="active">{item.name}</NavLink>
        )
    })
    return (
        <nav className="navigation">
            <img src={Banner} class="banner" alt="https://knowyourmeme.com/photos/1399742-dead-cells" />
            {SiteNav}
        </nav>

    )
}