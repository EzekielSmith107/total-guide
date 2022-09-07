import { Link } from 'react-scroll'

import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.nav}>
        <div>
            <ul className={classes.navbarContainer}>
                <li className={classes.navItem}>
                    <Link className={classes.navLinks} to="home" spy={true} smooth={true} offset={-90} duration={500}>The Gentle Rat</Link>
                </li>
                <li className={classes.navItem}>
                    <Link className={classes.navLinks} to="guidelines" spy={true} smooth={true} offset={-90} duration={500}>Guidelines</Link>
                </li>
                <li className={classes.navItem}>
                    <Link className={classes.navLinks} to="cheatsheet" spy={true} smooth={true} offset={-90} duration={500}>Cheat Sheet</Link>
                </li>
                <li className={classes.navItem}>
                    <Link className={classes.navLinks} to="showcase" spy={true} smooth={true} offset={-90} duration={500}>Showcase</Link>
                </li>
                <li className={classes.navItem}>
                    <Link className={classes.navLinks} to="generator" spy={true} smooth={true} offset={-90} duration={500}>Generator</Link>
                </li>
                <li className={classes.navItem}>
                    <Link className={classes.navLinks} to="resources" spy={true} smooth={true} offset={-90} duration={500}>Resources</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar