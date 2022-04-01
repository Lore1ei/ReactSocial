import profile from './Post.module.css';

const Post = (props) => {

    return(
    <div className={profile.item}>
      <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="" />
        {props.message}
        <div>
          <span>like {props.countlike}</span>
        </div>
      </div>
    )
}

export default Post;