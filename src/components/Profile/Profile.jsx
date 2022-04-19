import Avadescr from './AvaDescription/Avadescr';
import Myposts from './MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = (props) => {
    return(
        <div>
          <div className="content_first_img">
            <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt="" />
          </div>

          <Avadescr name='Alexandr' secondName='Nesterok'/>
          <Myposts posts={props.profilePage.posts}
                   newPost={props.profilePage.newPost}
                   addPost={props.addPost}
                   ChangePostText={props.ChangePostText}/>
        </div>  
    )
}

export default Profile;