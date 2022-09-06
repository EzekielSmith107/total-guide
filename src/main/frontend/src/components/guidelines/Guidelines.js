import React from 'react'
import classes from './Guidelines.module.css'
import testImageOne from '../../images/testImageOne.jpg'
import testImageTwo from '../../images/testImageTwo.jpg'
import testImageThree from '../../images/testImageThree.jpg'
import testImageFour from '../../images/testImageFour.jpg'
import testImageFive from '../../images/testImageFive.jpg'
import testImageSix from '../../images/testImageSix.jpg'

const Guidelines = () => {
  return (
    <div className={classes.guidelineContainer} id='guidelines'>
        <div className={classes.keypairContainer}>
            <img src={testImageOne} alt='Total War Warhammer Battle' className={classes.image} />
            <div className={classes.textContainer}>
                <h1>Overview</h1>
                <p>One of the biggest barriers of entry to multiplayer battles is building the right army. Army composition plays a huge part in Total War land battles, so these guidelines are meant to give new players some tips to follow for building their first army. The current area of focus for this site is the Warhammer trilogy, but many of these tips may be applied to historical titles as well. Please enjoy the cheat sheet at the end for a concise summary of my build guidelines.</p>
            </div>
        </div>

        <div className={classes.keypairContainer}>
            <div className={classes.textContainer}>
                <h1>Heroes</h1>
                <p>Heroes have been a recent introduction to Total War and have been a focal point of army builds since their arrival. Because of various penalities that apply to your army if your general routes, I believe that newer players should tend to stick with tougher heroes that are more forgiving if mistakes are made. As a result, I suggest using a tanky, melee lord paired with a mage on a mobile mount to begin your army builds.</p>
            </div>
            <img src={testImageTwo} alt='Total War Warhammer Hero' className={classes.image} />
        </div>

        <div className={classes.keypairContainer}>
            <img src={testImageThree} alt='Total War Warhammer Infantry' className={classes.image} />
            <div className={classes.textContainer}>
                <h1>Infantry</h1>
                <p>Infantry is typically the backbone of any army. One aspect that newer players may overlook is the cost-effectiveness of units. As a result of land battle dynamics, low and mid tier infantry tend to be the most cost effective on a roster. For newer players, I suggest to take a frontline of basic troops with some spears or other defensive units to protect your back line assets (archers, artillery, etc). Elite infantry should be taken sparingly when you first begin multiplayer to ensure you have enough units for proper battlefield control.</p>
            </div>
        </div>

        <div className={classes.keypairContainer}>
            <div className={classes.textContainer}>
                <h1>Calvary</h1>
                <p>Calvary is probably my personal favorite unit type, especially in historical titles. In general, gaining the mobility advantage will deal a massive blow to your opponents ability to react appropriately to your plays. The downside to calvary is that they must be micromanaged appropriately as they are usually less effective in prolonged engagements than infantry. I suggest utilizing 2 - 4 units of calvary in your build if appropriate(some factions don't contain calvary units). Skirmish calvary can also be a great choose in a multitude of matchups, but they often require more control than even regular calvary to make cost effective.</p>
            </div>
            <img src={testImageFour} alt='Total War Warhammer Calvary' className={classes.image} />
        </div>

        <div className={classes.keypairContainer}>
            <img src={testImageFive} alt='Total War Warhammer Archers' className={classes.image} />
            <div className={classes.textContainer}>
                <h1>Archers</h1>
                <p>"Our arrows will blot out the sun." "Then we will fight in the shade." Archers and ranged units are usually one of the most flexible unit types depending on the faction you are playing. Some factions have slow, armored crossbows while others have fast, long range archers. Some factions actually have zero ranged units. As a result, builds and players will vary in how many and what type of ranged units they decide to take. For new players, I suggest 2 - 3 ranged units if applicable to help the player get used to utilizing ranged tools. One major feature of ranged units is that they typically need some form of protection from melee. A piece of advice that helped me when I first started was that you should bring one or two defenders for each archer that you bring in your build. This helped me make a more balanced army and practice keeping my units safe so they can deliver maximum damage per cost.</p>
            </div>
        </div>

        <div className={classes.keypairContainer}>
            <div className={classes.textContainer}>
                <h1>Monsters and Artillery</h1>
                <p>Now it's time for the fun units. Everyone loves a wild, raging beast crashing through a battleline or seeing a barrage of heavy artillery rain down on your opponent. Monsters and artillery may seem polar opposites, but they have a similar philosophy in army building. You usually want to take a range from 0 - 3 of each when including them in your list. Monsters and artillery typically fill a niche role (or simply look very cool), so I suggest keeping their numbers limited to ensure your army is wide enough to control the battlefield and/or protect your expensive backline units.</p>
            </div>
            <img src={testImageSix} alt='Total War Warhammer Monster' className={classes.image} />
        </div>
    </div>
  )
}

export default Guidelines