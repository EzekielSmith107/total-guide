import React from 'react'
import { Link } from 'react-scroll'

import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.nav}>
        <div>
            <div className={classes.navbarContainer}>
                <Link className={classes.navLogo} activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}>The Gentle Rat</Link>
                <div className={classes.navItem}>
                    <Link className={classes.navLinks} activeClass="active" to="guidelines" spy={true} smooth={true} offset={-80} duration={500}>Guidelines</Link>
                </div>
                <div className={classes.navItem}>
                    <Link className={classes.navLinks} activeClass="active" to="cheatsheet" spy={true} smooth={true} offset={-80} duration={500}>Cheatsheet</Link>
                </div>
                <div className={classes.navItem}>
                    <Link className={classes.navLinks} activeClass="active" to="generator" spy={true} smooth={true} offset={-80} duration={500}>Generator</Link>
                </div>
                <div className={classes.navItem}>
                    <Link className={classes.navLinks} activeClass="active" to="resources" spy={true} smooth={true} offset={-80} duration={500}>Resources</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar