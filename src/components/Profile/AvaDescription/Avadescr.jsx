import profile from './Avadescr.module.css';

const Avadescr = (props) => {
    return(
          <div className={profile.ava_description}>
            <img className={profile.img} src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
              <div className="description">
                <h3>{props.name} {props.secondName}</h3>
              </div>
            </div>

    )
}

export default Avadescr;