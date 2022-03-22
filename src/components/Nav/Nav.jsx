import classed from './Nav.module.css';

const Nav = () => {
    return(
        <nav className={classed.nav}>
          <ul className={classed.ul}>
            <li><a className={`${classed.a} ${classed.active}`} href="">Profile</a></li>
            <li><a className={classed.a} href="">Messages</a></li>
            <li><a className={classed.a} href="">News</a></li>
            <li><a className={classed.a} href="">Music</a></li>
            <li><a className={classed.a} href="">Settings</a></li>
          </ul>
          </nav>
    )
}

export default Nav;