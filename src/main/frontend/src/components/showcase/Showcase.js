import classes from './Showcase.module.css'

const Showcase = () => {
  return (
    <div className={classes.showcaseContainer} id='showcase'>
        <h1>Showcase Battle</h1>
        <iframe width="942" height="530" src="https://www.youtube.com/embed/weA8KxPOyy4" title="THOSE DASTARDLY DEPTH GUARD - Vampire Coast vs. Norsca - Total War Warhammer 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default Showcase