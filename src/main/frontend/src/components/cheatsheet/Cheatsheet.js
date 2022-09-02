import React from 'react'
import classes from './Cheatsheet.module.css'

const Cheatsheet = () => {
  return (
    <div className={classes.cheatsheetContainer}>
        <h1>Cheatsheet Overview</h1>
        <div className={classes.textContainer}>
            <p>Here is a small paragraph explaining the cheatsheet. I hope people can use this to help them learn more about the game and remove barriers to entry. My goal is to make a fun and creative design to appeal to people of all backgrounds. The cheatsheet will be downloadable for all.</p>
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