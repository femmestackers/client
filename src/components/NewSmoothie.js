import React, {useState} from 'react'
import './Styles.css'
import {useGlobalState} from '../config/store'
import {addSmoothie} from '../services/smoothieServices'
import AddIngredients from './AddIngredients'



const NewSmoothie = ({history}) => {

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setFormState({
      ...formState,
      [name]: value
    })
  }


  function handleSubmit (event) {
    event.preventDefault()
    const newSmoothie = {
        name: formState.name,
        category: formState.category,
        ingredients: ingredients,
        instructions: formState.instructions,
        fyi: formState.fyi
    }
    console.log(newSmoothie)
    addSmoothie(newSmoothie).then((newSmoothie) => {
      
        dispatch({
            type: "setSmoothies",
            data: [newSmoothie,...smoothies]
        })
        history.push('/smoothies')
    }).catch ((error) => {
        console.log("Caught an error on server adding a smoothie", error)
    })

}

const initialFormState = {
  name: "",
  category: "Pregnancy and post natal",
  instructions: "",
  fyi: ""
}
const[formState, setFormState] = useState(initialFormState)
const[ingredients, setIngredients]= useState({})

const {store, dispatch} = useGlobalState()
const {smoothies} = store


    return (
  <div className="first-container-addsmoothie">
      <h1>Post your Smoothie here!!</h1>    
      <form >
      <div>
          <label>Smoothie name</label>
          <input type="text" name="name" placeholder="Enter a smoothie name" value={formState.name} onChange = {handleChange}/>
      </div>
      <br/>
      <div>
          <label>
          Select a smoothie category:
          <select name="category" value={formState.category} onChange={handleChange}>            
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
      <div>
          <AddIngredients ingredients={ingredients} setIngredients={setIngredients}/>
      </div>
      <br/>
      <div>
          <label>Instructions</label>
          <input type="text" name="instructions" placeholder="Enter the instructions" value={formState.instructions} onChange={handleChange}/>
      </div>
      <br/>
      <div>
          <label>FYI(Any replacements, nutritional info?)</label>
          <input type="text" name="fyi" placeholder="Goodness of this smoothie" value={formState.fyi} onChange={handleChange}/>
      </div>
      <br/>
      
      <input onClick={handleSubmit} type="submit" value="Post Smoothie"/>
 
</form>
</div>
    )
  }


export default NewSmoothie

