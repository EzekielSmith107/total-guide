import { useState } from 'react'
import { useForm } from 'react-hook-form'
import classes from './Generator.module.css'
import loadImage from '../../images/loadImage.png'

const Generator = () => {
    const { register, handleSubmit, formState: { errors }} = useForm()
    const [image, setImage] = useState('')

    async function getImage(data) {
        let faction = data.faction
        let opponent = data.opponent
        const headers = {
            'Content-Type': 'application/json'
        }
        await fetch(`http://localhost:3000/builds/image?faction=${faction}&opponent=${opponent}`, {
            method: "GET",
            headers: headers
        })
        .then(response => response.json())
        .then(data => setImage(data[0]))
        .catch(err => console.error(err))
    }

    const onSubmit = (data) => {
        getImage(data)
    }

    return (
    <div className={classes.formContainer} id='generator'>
        <h1>Army Generator</h1>
        <p className={classes.generatorText}>The army generator is a tool to help new players try out a faction or begin having fun in some amazing multiplayer battles without having to worry about an army build. These builds are all made using the general guidelines from above. The purpose of each build is not to show an "optimal" list, but to have a good variety of units to control for players to learn different aspects of the game. Feel free to use the builds as inspiration for your own lists. Legendary lords and spellcasters can be swapped depending on your needs and feel free to add or subtract any units you want to make it you own.</p>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.selectContainer}>
            <div className={classes.select}>
                <select name='faction' id='faction' {...register('faction')}>
                    <option disabled>Choose your faction</option>
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
                    <option value='wood elves'>Wood Elves</option>
                    <option value='warriors of chaos'>Warriors of Chaos</option>
                </select>
                { errors.faction && errors.faction.message }
            </div>
            <div className={classes.select}>
                <select name='opponent' id='opponent' {...register('opponent')}>
                    <option disabled>Choose your opponent</option>
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
                    <option value='wood elves'>Wood Elves</option>
                    <option value='warriors of chaos'>Warriors of Chaos</option>
                </select>
                { errors.opponent && errors.opponent.message }
            </div>
            <button>Generate Army</button>
        </form>
        <img src={image || loadImage} alt='Army Build' id='armyBuild' className={classes.armyBuild}></img>
    </div>
    
  )
}

export default Generator