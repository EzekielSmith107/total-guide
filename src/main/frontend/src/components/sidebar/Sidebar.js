import { Link } from 'react-scroll'
import classes from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const aside = document.getElementsByClassName('aside')
    
    if(null) {
        aside.style.opacity = '100%'
        aside.style.top = '0'
    }
  
    return (
    <div className={classes.sidebarContainer}>
        <div className={classes.icon}>
            <FontAwesomeIcon icon={faTimes} className={classes.closeIcon} />
        </div>
        <div className={classes.sidebarWrapper}>
            <ul className={classes.sidebarMenu}>
                <li>
                    <Link to='guidelines' className={classes.sidebarLink}>Guidelines</Link>
                </li>
                <li>
                    <Link to='cheatsheet' className={classes.sidebarLink}>Cheat Sheet</Link>
                </li>
                <li>
                    <Link to='showcase' className={classes.sidebarLink}>Showcase</Link>
                </li>
                <li>
                    <Link to='generator' className={classes.sidebarLink}>Generator</Link>
                </li>
                <li>
                    <Link to='resources' className={classes.sidebarLink}>Resources</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar