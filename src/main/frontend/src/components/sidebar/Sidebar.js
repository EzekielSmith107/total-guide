import { Link } from 'react-scroll'
import classes from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({ isOpen, toggle }) => {
    return (
    <aside className={classes.sidebarContainer} style={{opacity: isOpen ? '100%' : 0, top: isOpen ? 0 : '-100%'}} onClick={toggle}>
        <div className={classes.icon}>
            <FontAwesomeIcon icon={faTimes} className={classes.closeIcon} onClick={toggle} />
        </div>
        <div className={classes.sidebarWrapper}>
            <ul className={classes.sidebarMenu}>
                <div>
                    <Link to='guidelines' spy={true} smooth={true} offset={-80} duration={500} className={classes.sidebarLink} onClick={toggle}>Guidelines</Link>
                </div>
                <div>
                    <Link to='cheatsheet' spy={true} smooth={true} offset={-80} duration={500} className={classes.sidebarLink} onClick={toggle}>Cheat Sheet</Link>
                </div>
                <div>
                    <Link to='showcase' spy={true} smooth={true} offset={-80} duration={500} className={classes.sidebarLink} onClick={toggle}>Showcase</Link>
                </div>
                <div>
                    <Link to='generator' spy={true} smooth={true} offset={-80} duration={500} className={classes.sidebarLink} onClick={toggle}>Generator</Link>
                </div>
                <div>
                    <Link to='resources' spy={true} smooth={true} offset={-80} duration={500} className={classes.sidebarLink} onClick={toggle}>Resources</Link>
                </div>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar