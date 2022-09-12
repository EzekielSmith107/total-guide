import classes from './Showcase.module.css'

const Showcase = () => {
  return (
    <div className={classes.showcaseContainer} id='showcase'>
        <hr/>
        <h1>Showcase Battle</h1>
        <iframe width="942" height="530" src="https://www.youtube.com/embed/bzXEIkheGX8" title="TWW3 Showcase Match" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Showcase