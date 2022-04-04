import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.path;
  return(
      <NavLink className={NavLink => NavLink.isActive ? `${s.dialog + ' ' + s.active}` : s.dialog} to={path}>{props.name}</NavLink>
  );
}

const Message = (props) =>{
    return(
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Alexander" path="1"/>
                <DialogItem name="Misha" path="2"/>
                <DialogItem name="Andrey" path="3"/>
                <DialogItem name="Igor" path="4"/>
                <DialogItem name="Tatyana" path="5"/>
                <DialogItem name="Oleg" path="6"/>
            </div>
            <div className={s.messages}>
                <Message message='Hello'/>
                <Message message='Hi, How are you today?'/>
                <Message message='Nice to meet you!'/>
            </div>
        </div>
    );
}

export default Dialogs;