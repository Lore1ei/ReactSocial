import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.path;
  return(
      <NavLink className={NavLink => NavLink.isActive ? `${s.dialog + ' ' + s.active}` : s.dialog} to={path}>{props.name}</NavLink>
  );
}




export default DialogItem;