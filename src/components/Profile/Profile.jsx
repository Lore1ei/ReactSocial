import Avadescr from './AvaDescription/Avadescr';
import Myposts from './MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = () => {
    return(
        <div>
          <div className="content_first_img">
            <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt="" />
          </div>

          <Avadescr name='Alexandr' secondName='Nesterok'/>
          <Myposts />
        </div>  
    )
}

export default Profile;