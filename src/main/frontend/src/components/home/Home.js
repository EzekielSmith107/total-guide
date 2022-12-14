import classes from './Home.module.css'
import background from '../../videos/background.mp4'

const Home = () => {
  return (
    <div className={classes.homeContainer} id='home'>
      <div className={classes.overlay}></div>
      <video src={background} autoPlay loop muted />
        <div className={classes.content}>
          <h1>Welcome</h1>
          <div className={classes.welcomeMessage}>
            <p>If you are a newcomer to Total War multiplayer battles or a curious veteran, then you've come to the right place! I'm The Gentle Rat, and this site is a passion project to help eliminate some of the barriers of entry to one of my favorite franchises of all time. I've been playing Total War games from Creative Assembly for over a decade. During that time, I've been practicing online and fighting historic and fantasy battles of massive proportions against friends and strangers. Feel free to look around and use some of the resources that I've collected and prepared for your aid. Of course, the best way to use these tools is to implement them in real practice. So I excitingly suggest to jump into a battle with a friend afterwards and put some of this information to use!</p>
          </div>
        </div>
    </div>
  )
}

export default Home