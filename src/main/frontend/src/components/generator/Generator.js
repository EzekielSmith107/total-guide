import React from 'react'
import { useForm } from 'react-hook-form'
import classes from './Generator.module.css'

const Generator = () => {
    const { register, handleSubmit, formState: { errors }} = useForm()
    const army = document.getElementById('armyBuild')

    async function getImage(data) {
        let faction = data.faction
        let opponent = data.opponent
        const headers = {
            'Content-Type': 'application/json'
        }
        await fetch(`http://localhost:8080/image?faction=${faction}&opponent=${opponent}`, {
            method: "GET",
            headers: headers
        })
        .then(res => res.json)
        .then(data => army.src = `${data}`)
        .catch(err => console.error(err))
    }

    const onSubmit = (data) => {
        getImage(data)
    }

    return (
    <div className={classes.formContainer}>
        <h1>Army Generator</h1>
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
                    <option value='warriors of chaos'>Warriors of Chaos</option>
                    <option value='wood elves'>Wood Elves</option>
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
                    <option value='warriors of chaos'>Warriors of Chaos</option>
                    <option value='wood elves'>Wood Elves</option>
                </select>
                { errors.opponent && errors.opponent.message }
            </div>
            <button>Generate Army</button>
        </form>
        <img src='' alt='Army Build' id='armyBuild' className={classes.armyBuild}></img>
    </div>
    
  )
}

export default Generator