import React from 'react'
import { Link } from 'react-scroll'

import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.nav}>
        <div>
            <ul className={classes.navbarContainer}>
                <Link className={classes.navLogo} to="home" spy={true} smooth={true} offset={-90} duration={500}>The Gentle Rat</Link>
                <li className={classes.navItem}>
                    <Link className={classes.navLinks} to="guidelines" spy={true} smooth={true} offset={-90} duration={500}>Guidelines</Link>
                </li>
                <li className={classes.navItem}>
                    <Link className={classes.navLinks} to="cheatsheet" spy={true} smooth={true} offset={-90} duration={500}>Cheatsheet</Link>
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