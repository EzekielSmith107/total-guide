import classes from './Cheatsheet.module.css'
import Card from '../card/Card'
import testImage from '../../images/testImageOne.jpg'

const Cheatsheet = () => {
  return (
    <div className={classes.cheatsheetContainer} id='cheatsheet'>
        <div className={classes.cardContainer}>
          <Card>
            <h1>Cheat Sheet Overview</h1>
            <p>I have collected some general guidelines for new players when building an army and made an infographic to help simplify the process. Remember that these are just general guidelines and should not be taken as "law". Some of the top players in the world will take super optimized and skewed armies of entirely calvary or a massive wave of archers. When you feel more confident, I definitely recommend jumping in and building new armies that fit your playstyle and are the most fun to you. You can download the infographic below and also view a showcase match of me using an army built from the general guidelines in an actual multiplayer match.</p>
            <button className={classes.downloadBtn}>
              <a href={testImage} download='' target='blank'>Download Cheat Sheet</a>
            </button>
        </Card>
        </div>
    </div>
  )
}

export default Cheatsheet