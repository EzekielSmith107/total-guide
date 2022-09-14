import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import classes from './Navbar.module.css'

const Navbar = ({ toggle }) => {
  return (
    <nav>
        <div className={classes.navbarContainer}>
          <Link to='home' spy={true} smooth={true} offset={-80} duration={500} className={classes.navLogo}>The Gentle Rat</Link>
          <div className={classes.mobileIcon}>
            <FontAwesomeIcon icon={faBars} onClick={toggle} />
          </div>
          <ul className={classes.navMenu}>
            <li className={classes.navItem}>
              <Link to='guidelines' spy={true} smooth={true} offset={-80} duration={500} className={classes.navLinks}>Guidelines</Link>
            </li>
            <li className={classes.navItem}>
              <Link to='cheatsheet' spy={true} smooth={true} offset={-80} duration={500} className={classes.navLinks}>Cheat Sheet</Link>
            </li>
            <li className={classes.navItem}>
              <Link to='showcase' spy={true} smooth={true} offset={-80} duration={500} className={classes.navLinks}>Showcase</Link>
            </li>
            <li className={classes.navItem}>
              <Link to='generator' spy={true} smooth={true} offset={-80} duration={500} className={classes.navLinks}>Generator</Link>
            </li>
            <li className={classes.navItem}>
              <Link to='resources' spy={true} smooth={true} offset={-80} duration={500} className={classes.navLinks}>Resources</Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar