import classes from './Resources.module.css'

const Resources = () => {
  return (
    <div className={classes.resourceContainer} id='resources'>
        <div className={classes.introContainer}>
            <h1>Reinforcements have Arrived!</h1>
            <p className={classes.textBox}>Fear not! For you will not have to rely solely on my rat ramblings. Below I have assembled some of my favorite creators and content hubs for you to browse and explore. I highly suggest using these resources to plug yourself into the community and enjoy some like-minded friendship. The focus of each of these resources varies, but I hope you will find something you enjoy in the mix. Happy hunting!</p>
        </div>
        <div className={classes.youtubeContainer}>
            <h1>Youtube</h1>
            <div className={classes.contentContainer}>
                <p className={classes.textBox}>There are tons of amazing Youtube channels that cover Total War. For updates and keeping up with the game's development, I definitely suggest checking out the official Total War channel. They usually release content covering both multiplayer and campaign. For a look at competitive matches, I suggest checking out Turin or Human Boy YesYes. They have amazing content mostly covering domination and land battles respectively. For a more casual look at multiplayer, I highly recommend Heir of Carthage, who is a longtime content creator and someone that I used to watch when I first began Total War so many years ago.</p>
                <ul className={classes.listContainer}>
                    <li>
                        <a href='https://www.youtube.com/c/totalwar' target='blank'>Total War</a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/channel/UCNDJiDFJWaiKktyUBmVzGYA' target='blank'>Turin</a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/c/HumanBoyYesYes' target='blank'>Human Boy YesYes</a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/c/HeirofCarthage' target='blank'>Heir of Carthage</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className={classes.discordContainer}>
            <h1>Discord</h1>
            <div className={classes.contentContainer}>
                <p className={classes.textBox}>Discord provides a wonderful place to connect with others and learn a ton from more experienced players. The discords linked down below are a great place to start. From there, you should be able to find more discord servers that may fill a specific niche that seems interesting.</p>
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
        </div>
        <div className={classes.twitchContainer}>
            <h1>Twitch</h1>
            <div className={classes.contentContainer}>
                <p className={classes.textBox}>Twitch provides yet another amazing resource for learning how to play Total War. If you are looking to learn from one of the best players in the world, look no further than Enticity. He has a twitch and youtube channel with a plethora of helpful information, so don't be afraid to check him out. If you want to watch some more high level land battles, the ODM twitch channel hosts tournaments from time to time. Finally, if you are looking for some lore or campaign knowledge, then Loremaster of Sotek's Twitch channel is definitely the place to be.</p>
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
    </div>
  )
}

export default Resources