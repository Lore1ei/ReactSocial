import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Alexandr</div>
                <div className={s.dialog}>Misha</div>
                <div className={s.dialog}>Andrey</div>
                <div className={s.dialog}>Igor</div>
                <div className={s.dialog}>Tatyana</div>
                <div className={s.dialog}>Oleg</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Hi, How are you today?</div>
                <div className={s.message}>Nice to meet you!</div>
            </div>
        </div>
    );
}

export default Dialogs;