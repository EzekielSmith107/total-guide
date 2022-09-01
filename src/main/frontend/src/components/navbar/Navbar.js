import React from 'react'

import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
        <div className={classes.nav}>
            <div className={classes.navbarContainer}>
                <p className={classes.navLogo}>The Gentle Rat</p>
                <div className={classes.navItem}>
                    <h2 className={classes.navLinks}>Guidelines</h2>
                </div>
                <div className={classes.navItem}>
                    <h2 className={classes.navLinks}>Cheatsheet</h2>
                </div>
                <div className={classes.navItem}>
                    <h2 className={classes.navLinks}>Generator</h2>
                </div>
                <div className={classes.navItem}>
                    <h2 className={classes.navLinks}>Resources</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar