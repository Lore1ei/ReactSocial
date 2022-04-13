import s from '../Nav.module.css'
import FriendItem from "./FriendItem";

const Friends = (props) => {

    let friendsData = props.state.friends.map(f => <FriendItem img={f.img} name={f.name}/>)

    return (
        <div className={s.friendsWrap}>
            <div className={s.friendsTitle}>Friends</div>
            <div className={s.friends}>
                {friendsData}
            </div>
        </div>
    );
}

export default Friends;