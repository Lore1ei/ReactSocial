import profile from './MyPosts.module.css';
import Post from './posts/Post';

const Myposts = () => {

    let posts = [
        {id: 1, message: 'Hello', countLike: 11},
        {id: 2, message: 'Holla', countLike: 23},
        {id: 3, message: 'Hi', countLike: 13},
        {id: 4, message: 'Nice', countLike: 232},
    ];

    let postsElements = posts.map(p => <Post message={p.message} countLike={p.countLike}/>)

    return(
              <div className={profile.posts}>
                <div className={profile.name_post}>My posts</div>
                <div className={profile.new_post}>
                    <div className="">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="">
                        <button>Push message</button>
                    </div>
                </div>

                <div className={profile.posts_form}>
                    { postsElements }
                </div>
              </div>
    )
}

export default Myposts;