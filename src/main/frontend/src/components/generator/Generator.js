import React from 'react'
import classes from './Generator.module.css'
import testImageSeven from '../../images/testImageSeven.jpg'

const Generator = () => {
  return (
    <div className={classes.formContainer}>
        <h1>Army Generator</h1>
        <div className={classes.selectContainer}>
            <div className={classes.select}>
                <select name='faction' id='faction'>
                    <option selected disabled>Choose your faction</option>
                    <option value='beastmen'>Beastmen</option>
                    <option value='bretonnia'>Bretonnia</option>
                    <option value='dark elves'>Dark Elves</option>
                    <option value='dwarfs'>Dwarfs</option>
                    <option value='empire'>Empire</option>
                    <option value='grand cathay'>Grand Cathay</option>
                    <option value='greenskins'>Greenskins</option>
                    <option value='high elves'>High Elves</option>
                    <option value='khorne'>Khorne</option>
                    <option value='kislev'>Kislev</option>
                    <option value='lizardmen'>Lizardmen</option>
                    <option value='norsca'>Norsca</option>
                    <option value='nurgle'>Nurgle</option>
                    <option value='ogre kingdoms'>Ogre Kingdoms</option>
                    <option value='skaven'>Skaven</option>
                    <option value='slaanesh'>Slaanesh</option>
                    <option value='tomb kings'>Tomb Kings</option>
                    <option value='tzeentch'>Tzeentch</option>
                    <option value='vampire coast'>Vampire Coast</option>
                    <option value='vampire counts'>Vampire Counts</option>
                    <option value='warriors of chaos'>Warriors of Chaos</option>
                    <option value='wood elves'>Wood Elves</option>
                </select>
            </div>
            <div className={classes.select}>
                <select name='opponent' id='opponent'>
                    <option selected disabled>Choose your opponent</option>
                    <option value='beastmen'>Beastmen</option>
                    <option value='bretonnia'>Bretonnia</option>
                    <option value='dark elves'>Dark Elves</option>
                    <option value='dwarfs'>Dwarfs</option>
                    <option value='empire'>Empire</option>
                    <option value='grand cathay'>Grand Cathay</option>
                    <option value='greenskins'>Greenskins</option>
                    <option value='high elves'>High Elves</option>
                    <option value='khorne'>Khorne</option>
                    <option value='kislev'>Kislev</option>
                    <option value='lizardmen'>Lizardmen</option>
                    <option value='norsca'>Norsca</option>
                    <option value='nurgle'>Nurgle</option>
                    <option value='ogre kingdoms'>Ogre Kingdoms</option>
                    <option value='skaven'>Skaven</option>
                    <option value='slaanesh'>Slaanesh</option>
                    <option value='tomb kings'>Tomb Kings</option>
                    <option value='tzeentch'>Tzeentch</option>
                    <option value='vampire coast'>Vampire Coast</option>
                    <option value='vampire counts'>Vampire Counts</option>
                    <option value='warriors of chaos'>Warriors of Chaos</option>
                    <option value='wood elves'>Wood Elves</option>
                </select>
            </div>
        </div>
        <img src={testImageSeven} alt='Test Army Build' className={classes.armyBuild}></img>
    </div>
    
  )
}

export default Generator