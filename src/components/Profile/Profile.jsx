import Avadescr from './AvaDescription/Avadescr';
import Myposts from './MyPosts/MyPosts';
import profile from './Profile.module.css';


const Profile = () => {
    return(
        <div className={profile.content}>
          <div className="content_first_img">
            <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt="" />
          </div>

          <Avadescr name='Alexander' secondName='Nesterok'/>
          <Myposts />
        </div>  
    )
}

export default Profile;