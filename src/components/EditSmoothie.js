import React, { useState, useEffect } from 'react';
import {useGlobalState} from '../config/store'
import { getSmoothieFromId, updateSmoothie } from '../services/smoothieServices';
import AddIngredients from './AddIngredients'

const EditSmoothie = ({history, match}) => {

    const {store, dispatch} = useGlobalState()
    const {smoothies} = store
    const smoothieId = match.params.id
    const smoothie = getSmoothieFromId(smoothies,smoothieId)

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setFormState({
            ...formState,
            [name]:value 
        })
    }
    function handleSubmit (event) {
        event.preventDefault()
        const changeSmoothie = {
            _id: smoothie._id,
            username: smoothie.username,
            name: formState.name,
            category: formState.category,
            ingredients: ingredients,
            instructions: formState.instructions,
            fyi: formState.fyi
        }
        updateSmoothie(changeSmoothie).then(() => {
            const otherSmoothie = smoothies.filter((smoothie) => smoothie._id !== changeSmoothie._id)
            dispatch({
                type: "setSmoothies",
                data: [changeSmoothie, ...otherSmoothie]
            })
            alert("You have updated your smoothie")
            history.push(`/smoothies/${smoothie._id}`)
        }).catch((error) => {
            console.log("caught error on edit", error)
        })
        
    }

    // Set initial form values to what is in the current smoothie
    const initialFormState = {
        name: "",
        category: "",
        quantity: "",
        instructions: "",
        fyi: ""
    }

    const initialIngredients = smoothie ? smoothie.ingredients : {}
    const[formState, setFormState] = useState(initialFormState)
    const [ingredients, setIngredients] = useState(initialIngredients)

    useEffect(() => {
        // Set the formState to the fields in the smoothie after mount and when smoothie changes
      smoothie && setFormState ({
        name: smoothie.name,
        category: smoothie.category ,
        ingredients: smoothie.ingredients,
        instructions: smoothie.instructions,
        fyi: smoothie.fyi
      })
    },[smoothie])

    return (
        <div className="first-container-addsmoothie">
            <h1>Edit your Smoothie!!</h1>    
            <form >
            <div>
                <label>Smoothie name</label>
                <input type="text" name="name" placeholder="Enter a smoothie name" value={formState.name} onChange = {handleChange}/>
            </div>
            <br/>
            <div>
                <label>
                Select a smoothie category:
                <select value={formState.category} onChange={handleChange}>            
                  <option value="Pregnancy and post natal">Pregnancy and post natal</option>
                  <option value="Nut free">Nut free</option>
                  <option value="Diabetic-friendly">Diabetic-friendly</option>
                  <option value="Detox">Detox</option>
                  <option value="Weight-loss">Weight-loss</option>
                  <option value="Post workout">Post workout</option>
                </select>
                </label>
            </div>
            <br/>
            <br/>
      <div>
          <AddIngredients ingredients={ingredients} setIngredients={setIngredients}/>
      </div>
            <br/>
            <div>
                <label>Instructions</label>
                <input type="text" name="instructions" placeholder="Enter the instructions" value={formState.instructions} onChange = {handleChange}/>
            </div>
            <br/>
            <div>
                <label>FYI(Any replacements, nutritional info?)</label>
                <input type="text" name="fyi" placeholder="Goodness of this smoothie" value={formState.fyi} onChange = {handleChange}/>
            </div>
            <br/>
            
            <input onClick={handleSubmit} type="submit" value="Update!"/>
       
      </form>
      </div>
          );
        }

export default EditSmoothie