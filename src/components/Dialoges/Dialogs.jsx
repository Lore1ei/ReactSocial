import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Dialogs = (props) => {

    let dialogs = [
        {path: 1, name: 'Alexandr'},
        {path: 2, name: 'Misha'},
        {path: 3, name: 'Andrey'},
        {path: 4, name: 'Igor'},
        {path: 5, name: 'Tatyana'},
        {path: 6, name: 'Oleg'},
    ];

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi, How are you today?'},
        {id: 3, message: 'Nice to meet you!'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Hello'},
        {id: 6, message: 'Hello'},
    ];

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} path={d.path}/>)
    let messagesElements = messages.map( m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;