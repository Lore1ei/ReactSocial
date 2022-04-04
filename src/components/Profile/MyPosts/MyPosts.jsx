import profile from './MyPosts.module.css';
import Post from './posts/Post';

const Myposts = () => {
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

                <div className={profile.posts__form}>
                  <Post message='Hello' countlike='11'/>
                  <Post message='Holla' countlike='23'/>
                </div>
              </div>
    )
}

export default Myposts;