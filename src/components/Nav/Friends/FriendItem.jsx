import s from '../Nav.module.css'

const FriendItem = (props) => {
    return(

            <div className={s.friendItem}>
                <div className={s.friendImg}>
                    <img src={props.img} alt=""/>
                </div>
                <div className={s.friendName}>
                    {props.name}
                </div>
            </div>

    );
}

export default FriendItem;