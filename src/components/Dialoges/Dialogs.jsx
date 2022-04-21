import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} path={d.path} img={d.img}/>)
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>)

    let ref = React.createRef();

    let addMessage = () => {
        if(ref.current.value.length >= 1){
            props.addMessageDialog();
        }
    };

    let dialogOnChange = () => {
        let text = ref.current.value;
        props.ChangeDialogText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }

                <textarea ref={ref} onChange={dialogOnChange} name="" id="" cols="30" rows="5" value={props.state.newPost}/>
                <button onClick={addMessage}>Push Message</button>
            </div>
        </div>
    );
}

export default Dialogs;