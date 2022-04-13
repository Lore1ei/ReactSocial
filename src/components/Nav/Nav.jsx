import s from './Nav.module.css';
import NavA from './Navlink'
import Friends from "./Friends/Friends";


const Nav = (props) => {

    let NavAdate = props.state.nav.map( n => <NavA path={n.path} title={n.title}/> )

    return(
        <div className={s.nav}>
        <nav>
          <ul className={s.ul}>
              { NavAdate }
          </ul>
          </nav>
            <Friends state={props.state}/>
        </div>
    )
}

export default Nav;