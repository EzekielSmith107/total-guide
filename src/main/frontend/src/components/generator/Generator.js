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
                </select>
            </div>
            <div className={classes.select}>
                <select name='opponent' id='opponent'>
                    <option selected disabled>Choose your opponent</option>
                    <option value='beastmen'>Beastmen</option>
                    <option value='bretonnia'>Bretonnia</option>
                    <option value='dark elves'>Dark Elves</option>
                </select>
            </div>
        </div>
        <img src={testImageSeven} alt='Test Army Build' className={classes.armyBuild}></img>
    </div>
    
  )
}

export default Generator