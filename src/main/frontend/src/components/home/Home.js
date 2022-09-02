import React from 'react'
import testVideo from '../../videos/testVideo.mp4'
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes.homeContainer}>
        <div className={classes.overlay}></div>
        <video src={testVideo} autoPlay loop muted />
            <div className={classes.content}>
                <h1>Welcome</h1>
                <p>This is a test to see how a video will work on my home page. My goal is to offer a modern and interactive site for my community memebers. I hope that CA will be happy with the work and content that I've produced and will be glad to sponser the site. I can offer my site as a way to gather new players for total war multiplayer. I am so excited to deliver this to the public.</p>
            </div>
    </div>
  )
}

export default Home