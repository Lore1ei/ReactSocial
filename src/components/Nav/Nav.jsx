import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return(
        <nav className={s.nav}>
          <ul className={s.ul}>
            <li>
                <NavLink className= { navData => navData.isActive ? s.active : s.item } to="/" activeClassName={s.active}>Profile</NavLink>
            </li>
            <li>
                <NavLink className= { navData => navData.isActive ? s.active : s.item } to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </li>
            <li>
                <NavLink className= { navData => navData.isActive ? s.active : s.item } to="/news" activeClassName={s.active}>News</NavLink>
            </li>
            <li>
                <NavLink className= { navData => navData.isActive ? s.active : s.item } to="/music" activeClassName={s.active}>Music</NavLink>
            </li>
            <li>
                <NavLink className={navData => navData.isActive ? s.active : s.item} to='/settings' activeClassName={s.active}>Settings</ NavLink>
            </li>
          </ul>
          </nav>
    )
}

export default Nav;