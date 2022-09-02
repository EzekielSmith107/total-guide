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
    <div className={classes.guidelineContainer}>
        <div className={classes.keypairContainer}>
            <img src={testImageOne} alt='Total War Warhammer Battle' />
            <div className={classes.textContainer}>
                <h1>Overview</h1>
                <p>This is some placeholder text about the overview. Here I will write about the reason for the general guidelines and constraints. We will discuss my thought process for developing the guidelines and what I hope to achieve. I am excited to get this portion of my website setup so I can continue to work on other areas and get the general feel set for the website in general.</p>
            </div>
        </div>

        <div className={classes.keypairContainer}>
            <div className={classes.textContainer}>
                <h1>Heroes</h1>
                <p>This is some placeholder text about the overview. Here I will write about the reason for the general guidelines and constraints. We will discuss my thought process for developing the guidelines and what I hope to achieve. I am excited to get this portion of my website setup so I can continue to work on other areas and get the general feel set for the website in general.</p>
            </div>
            <img src={testImageTwo} alt='Total War Warhammer Hero' />
        </div>

        <div className={classes.keypairContainer}>
            <img src={testImageThree} alt='Total War Warhammer Infantry' />
            <div className={classes.textContainer}>
                <h1>Infantry and Monstrous Infantry</h1>
                <p>This is some placeholder text about the overview. Here I will write about the reason for the general guidelines and constraints. We will discuss my thought process for developing the guidelines and what I hope to achieve. I am excited to get this portion of my website setup so I can continue to work on other areas and get the general feel set for the website in general.</p>
            </div>
        </div>

        <div className={classes.keypairContainer}>
            <div className={classes.textContainer}>
                <h1>Calvary</h1>
                <p>This is some placeholder text about the overview. Here I will write about the reason for the general guidelines and constraints. We will discuss my thought process for developing the guidelines and what I hope to achieve. I am excited to get this portion of my website setup so I can continue to work on other areas and get the general feel set for the website in general.</p>
            </div>
            <img src={testImageFour} alt='Total War Warhammer Calvary' />
        </div>

        <div className={classes.keypairContainer}>
            <img src={testImageFive} alt='Total War Warhammer Artillary' />
            <div className={classes.textContainer}>
                <h1>Archers and Artillary</h1>
                <p>This is some placeholder text about the overview. Here I will write about the reason for the general guidelines and constraints. We will discuss my thought process for developing the guidelines and what I hope to achieve. I am excited to get this portion of my website setup so I can continue to work on other areas and get the general feel set for the website in general.</p>
            </div>
        </div>

        <div className={classes.keypairContainer}>
            <div className={classes.textContainer}>
                <h1>Single Entity Monsters</h1>
                <p>This is some placeholder text about the overview. Here I will write about the reason for the general guidelines and constraints. We will discuss my thought process for developing the guidelines and what I hope to achieve. I am excited to get this portion of my website setup so I can continue to work on other areas and get the general feel set for the website in general.</p>
            </div>
            <img src={testImageSix} alt='Total War Warhammer III Monster' />
        </div>
    </div>
  )
}

export default Guidelines