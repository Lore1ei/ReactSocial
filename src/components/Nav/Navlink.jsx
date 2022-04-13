import {NavLink} from "react-router-dom";
import s from "./Nav.module.css";

const NavA = (props) => {
    return(
        <li>
            <NavLink className= { navData => navData.isActive ? s.active : s.item } to={props.path} activeclassname={s.active}>{props.title}</NavLink>
        </li>
    );
}

export default NavA;