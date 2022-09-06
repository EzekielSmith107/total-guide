import React from 'react'
import classes from './Cheatsheet.module.css'

const Cheatsheet = () => {
  return (
    <div className={classes.cheatsheetContainer} id='cheatsheet'>
        <h1>Cheat Sheet Overview</h1>
        <div className={classes.textContainer}>
            <p>I have collected some general guidelines for new players when building an army and made an infographic to help simplify the process. Remember that these are just general guidelines and should not be taken as "law". Some of the top players in the world will take super optimized armies of entirely calvary or a massive wave of infantry. When you feel more confident, I definitely recommend jumping in and building new armies that fit your playstyle and are the most fun to you. You can download the infographic below and also view a showcase match of me using an army built from the general guidelines in an actual multiplayer match.</p>
        </div>
        <button className={classes.downloadBtn}>Download Cheatsheet</button>
        <div className={classes.showcaseContainer}>
            <h1>Showcase Battle</h1>
            <iframe width="942" height="530" src="https://www.youtube.com/embed/weA8KxPOyy4" title="THOSE DASTARDLY DEPTH GUARD - Vampire Coast vs. Norsca - Total War Warhammer 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default Cheatsheet