import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const NavA = (props) => {
  return(
      <li>
          <NavLink className= { navData => navData.isActive ? s.active : s.item } to={props.path} activeClassName={s.active}>{props.title}</NavLink>
      </li>
  );
}

const Nav = () => {
    return(
        <nav className={s.nav}>
          <ul className={s.ul}>
                <NavA path='/' title='Profile'/>
                <NavA path='/dialogs' title='Messages'/>
                <NavA path='/news' title='News'/>
                <NavA path='/music' title='Music'/>
                <NavA path='/settings' title='Settings'/>
          </ul>
          </nav>
    )
}

export default Nav;