import React from 'react'
import classes from './Resources.module.css'

const Resources = () => {
  return (
    <div className={classes.resourceContainer}>
        <div className={classes.introContainer}>
            <h1 className={classes.heading}>Reinforcements have Arrived!</h1>
            <p className={classes.textBox}>This is were a small paragraph will go to introduce the page. This is a test to see how a video will work on my home page. My goal is to offer a modern and interactive site for my community memebers. I hope that CA will be happy with the work and content that I've produced and will be glad to sponser the site. I can offer my site as a way to gather new players for total war multiplayer. I am so excited to deliver this to the public.</p>
        </div>
        <div className={classes.youtubeContainer}>
            <h1 className={classes.heading}>Youtube</h1>
            <p className={classes.textBox}>This is were a small paragraph will go to introduce the page. This is a test to see how a video will work on my home page. My goal is to offer a modern and interactive site for my community memebers. I hope that CA will be happy with the work and content that I've produced and will be glad to sponser the site. I can offer my site as a way to gather new players for total war multiplayer. I am so excited to deliver this to the public.</p>
        </div>
        <div className={classes.discordContainer}>
            <h1 className={classes.heading}>Discord</h1>
            <p className={classes.textBox}>This is were a small paragraph will go to introduce the page. This is a test to see how a video will work on my home page. My goal is to offer a modern and interactive site for my community memebers. I hope that CA will be happy with the work and content that I've produced and will be glad to sponser the site. I can offer my site as a way to gather new players for total war multiplayer. I am so excited to deliver this to the public.</p>
        </div>
        <div className={classes.twitchContainer}>
            <h1 className={classes.heading}>Twitch</h1>
            <p className={classes.textBox}>This is were a small paragraph will go to introduce the page. This is a test to see how a video will work on my home page. My goal is to offer a modern and interactive site for my community memebers. I hope that CA will be happy with the work and content that I've produced and will be glad to sponser the site. I can offer my site as a way to gather new players for total war multiplayer. I am so excited to deliver this to the public.</p>
        </div>
    </div>
  )
}

export default Resources