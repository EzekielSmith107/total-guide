import classes from './Resources.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitch, faDiscord } from '@fortawesome/free-brands-svg-icons'

const Resources = () => {
  return (
    <div className={classes.resourceContainer} id='resources'>
        <div className={classes.introContainer}>
            <hr/>
            <h1>Reinforcements have Arrived!</h1>
            <p className={classes.textBox}>Fear not! For you will not have to rely solely on my rat ramblings. Below I have assembled some of my favorite creators and content hubs for you to browse and explore. I highly suggest using these resources to plug yourself into the community and find some like-minded friendship. The focus of each of these resources varies, but I hope you will find something you enjoy in the mix. Happy hunting!</p>
        </div>
        <div className={classes.siteContainer}>
            <h1>Youtube
                <FontAwesomeIcon icon={faYoutube} className={classes.sectionIcon} />
            </h1>
                <ul className={classes.listContainer}>
                    <li>
                        <a href='https://www.youtube.com/c/HeirofCarthage' target='blank'>Heir of Carthage</a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/c/totalwar' target='blank'>Total War</a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/c/HumanBoyYesYes' target='blank'>Human Boy YesYes</a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/channel/UCNDJiDFJWaiKktyUBmVzGYA' target='blank'>Turin</a>
                    </li>
                </ul>
        </div>
        <div className={classes.siteContainer}>
            <h1>Discord
                <FontAwesomeIcon icon={faDiscord} className={classes.sectionIcon} />
            </h1>
                <ul className={classes.listContainer}>
                    <li>
                        <a href='null'>Official Total War Discord</a>
                    </li>
                    <li>
                        <a href='null'>Turin's Discord</a>
                    </li>
                    <li>
                        <a href='null'>Official Tournament Discord</a>
                    </li>
                </ul>
        </div>
        <div className={classes.siteContainer}>
            <h1>Twitch
                <FontAwesomeIcon icon={faTwitch} className={classes.sectionIcon} />
            </h1>
                <ul className={classes.listContainer}>
                    <li>
                        <a href='https://www.twitch.tv/enticity' target='blank'>Enticity</a>
                    </li>
                    <li>
                        <a href='https://www.twitch.tv/ordredemaltetww' target='blank'>OrdreDeMalteTWW</a>
                    </li>
                    <li>
                        <a href='https://www.twitch.tv/loremasterofsotek' target='blank'>Loremaster of Sotek</a>
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default Resources