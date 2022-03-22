import classes from './Header.module.css';

// let classes = {
//     'header' : 'Header_header__HYh60',
//     'img' : 'Header_header__HYh60img'
// }

const Header = () => {
    return(
        <header className={classes.header}>
        <img className={classes.img} src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
        </header>   
    )
}

export default Header;