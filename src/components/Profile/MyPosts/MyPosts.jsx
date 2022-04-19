import profile from './MyPosts.module.css';
import React from "react";
import Post from './posts/Post';


const Myposts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} countLike={p.countLike}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.ChangePostText(text);
    }

    return(
              <div className={profile.posts}>
                <div className={profile.name_post}>My posts</div>
                <div className={profile.new_post}>
                    <div className="">
                        <textarea ref={newPostElement} name="" id="" cols="30" rows="5" onChange={onPostChange} value={props.newPost}/>
                    </div>
                    <div className="">
                        <button onClick={addPost}>Push message</button>
                    </div>
                </div>

                <div className={profile.posts_form}>
                    { postsElements }
                </div>
              </div>
    )
}

export default Myposts;