import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {AddMessageDialogActionCreator, ChangeDialogTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} path={d.path} img={d.img}/>)
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>)

    let addMessage = () => {
            props.dispatch(AddMessageDialogActionCreator());
    };

    let dialogOnChange = (e) => {
        let text = e.target.value;
        props.dispatch(ChangeDialogTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }

                <textarea onChange={dialogOnChange} name="" id="" cols="30" rows="5" value={props.state.newPost}/>
                <button className={s.btn} onClick={addMessage}>Push Message</button>
            </div>
        </div>
    );
}

export default Dialogs;