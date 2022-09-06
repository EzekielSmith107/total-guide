import React from 'react'
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
            <div>
                <p className={classes.textBox}></p>
                <ul>
                    <li>Example 1</li>
                    <li>Example 2</li>
                    <li>Example 3</li>
                </ul>
            </div>
        </div>
        <div className={classes.discordContainer}>
            <h1>Discord</h1>
            <div>
                <p className={classes.textBox}></p>
                <ul>
                    <li>Example 1</li>
                    <li>Example 2</li>
                    <li>Example 3</li>
                </ul>
            </div>
        </div>
        <div className={classes.twitchContainer}>
            <h1>Twitch</h1>
            <div>
                <p className={classes.textBox}></p>
                <ul>
                    <li>Example 1</li>
                    <li>Example 2</li>
                    <li>Example 3</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Resources