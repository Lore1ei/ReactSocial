const Profile = () => {
    return(
        <div className="content">
          <div className="content_first_img">
            <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt="" />
          </div>

          <div className="ava-description">


            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
            <div className="description">
              <h3>Александр</h3>
            </div>
            </div>
            <div className="posts">
              <div className="name_post">My posts</div>
              <div className="new_posts">
                <input type="text" />
              </div>

              <div className="posts__form">
                <div className="">post1</div>
                <div className="">post2</div>
              </div>
            </div>
        </div>  
    )
}

export default Profile;