import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
        <div className={classes.navbarContainer}>
          <Link to='home' className={classes.navLogo}>The Gentle Rat</Link>
          <div className={classes.mobileIcon}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={classes.navMenu}>
            <li className={classes.navItem}>
              <Link to='guidelines' className={classes.navLinks}>Guidelines</Link>
            </li>
            <li className={classes.navItem}>
              <Link to='cheatsheet' className={classes.navLinks}>Cheat Sheet</Link>
            </li>
            <li className={classes.navItem}>
              <Link to='showcase' className={classes.navLinks}>Showcase</Link>
            </li>
            <li className={classes.navItem}>
              <Link to='generator' className={classes.navLinks}>Generator</Link>
            </li>
            <li className={classes.navItem}>
              <Link to='resources' className={classes.navLinks}>Resources</Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar