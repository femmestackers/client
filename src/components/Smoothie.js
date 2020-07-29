import React from 'react'
import {Link} from 'react-router-dom'
import Ingredients from './Ingredients'
import './Styles.css'
import {useGlobalState} from '../config/store'
import {deleteSmoothie} from '../services/smoothieServices'


 const Smoothie = ({history, smoothie}) => {

  const {store, dispatch} = useGlobalState()
  const {smoothies, loggedInUser} = store
  // where no expenses exist, return null
  if (!smoothie) return null

  const {name,category, ingredients,instructions,fyi}= smoothie
  const authoriseEditDelete = loggedInUser && loggedInUser === smoothie.username
  console.log(loggedInUser, authoriseEditDelete)
  function handleEdit(event) {
    event.preventDefault()
    history.push(`/smoothies/edit/${smoothie._id}`)
  }
  

  //Handle delete button
  function handleDelete(event) {
    event.preventDefault()
     deleteSmoothie(smoothie._id).then(() => {
        console.log("deleted smoothie")
        const updatedSmoothies = smoothies.filter((smoothie) => smoothie._id !== smoothie._id)
        dispatch ({
            type: "setSmoothies",
            data: updatedSmoothies
        })
        history.push("/smoothies")
    }).catch((error) => {
        console.log("There was an error deleting smoothie", error)
    })
}

    
    return (
      
  <div>
      <form>
      <div>
       <Link to={`/smoothies/${smoothie._id}`}>

          <label>Smoothie name:{name}</label>
          </Link>
      </div>
      <br/>
      <div>
          <label>Smoothie category:{category}</label>
      </div>
      <br/>
      <div>
          <label>Ingredients:</label>
          <Ingredients ingredients= {ingredients} />
      </div>
      <br/>
      <div>
          <label>Instructions:{instructions}</label>
      </div>
      <br/>
      <div>
          <label>Fyi:{fyi}</label>
      </div>
      <br/>
      
      {authoriseEditDelete && (
        <div>
      <input type="submit" value="Edit Smoothie" onClick={handleEdit}/>
      <input type="submit" value="Delete Smoothie" onClick={handleDelete}/><br/>
      </div>)
      }
</form>

</div>
    );
  }


export default Smoothie