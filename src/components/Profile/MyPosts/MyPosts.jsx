import profile from './MyPosts.module.css';
import Post from './posts/Post';

const Myposts = () => {

    let mypostsData = [
        {id: 1, message: 'Hello', countlike: 11},
        {id: 2, message: 'Holla', countlike: 23},
    ]

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
                  <Post message={mypostsData[0].message} countlike={mypostsData[0].countlike}/>
                  <Post message={mypostsData[1].message} countlike={mypostsData[1].countlike}/>
                </div>
              </div>
    )
}

export default Myposts;