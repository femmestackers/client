import React, {useState} from 'react'
import './Styles.css'
import {useGlobalState} from '../config/store'
import {addSmoothie} from '../services/smoothieServices'



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
        ingredients: formState.ingredients,
        instructions: formState.instructions,
        fyi: formState.fyi
    }
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
  ingredients: "",
  instructions: "",
  fyi: ""
}
const[formState, setFormState] = useState(initialFormState)
const {store, dispatch} = useGlobalState()
const {smoothies} = store

  const labelStyles = {
      color: 'green',
      fontSize: '1.2em',
  }
  const titleStyles = {
    color: 'green',
    fontSize: '2.2em',
  }
    return (
  <div className="add-smoothie-container">
    <div className="formbox">
      <h1 style={titleStyles}>Post your Smoothie!!</h1>    
      <form >
        <div>
            <label style={labelStyles}>Smoothie name</label>
            <input type="text" name="name" placeholder="Enter a smoothie name" value={formState.name} onChange = {handleChange}/>
        </div>
        <div>
            <label style={labelStyles}>
            Select a category:
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
        <div>
            <label style={labelStyles}>Ingredients</label>
            <input type="text" name="ingredients" placeholder="Enter ingredients" value={formState.ingredients} onChange={handleChange}/>
        </div>
        <div>
            <label style={labelStyles}>Instructions</label>
            <input type="text" name="instructions" placeholder="Enter the instructions" value={formState.instructions} onChange={handleChange}/>
        </div>
        <div>
            <label style={labelStyles}>FYI(Any replacements, nutritional info?)</label>
            <input type="text" name="fyi" placeholder="Goodness of this smoothie" value={formState.fyi} onChange={handleChange}/>
        </div>
        <input onClick={handleSubmit} type="submit" value="Post Smoothie"/>
      </form>
    </div>
    <div className="background-add-soothie-pic-box"></div>
  </div>
    );
  }


export default NewSmoothie

