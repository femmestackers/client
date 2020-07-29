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

const labelStyles = {
    color: 'green',
    fontSize: '1.2em',
}

    return (
       <div className="smoothieBox">
          <form className="smoothieBoxContent">  
            <div>
                <Link to={`/smoothies/${smoothie._id}`}>
                <label style={labelStyles}>Smoothie name:{name}</label>
                </Link>
            </div>
            <div>
                <label style={labelStyles}>Smoothie category:{category}</label>
            </div>
            <div>
                <label style={labelStyles}>Ingredients:</label>
                <Ingredients ingredients= {ingredients} />
            </div>
            <div>
                <label style={labelStyles}>Instructions:{instructions}</label>
            </div>
            <div>
                <label style={labelStyles}>Fyi:{fyi}</label>
            </div>
            {authoriseEditDelete && (
              <div className="buttonStyles">
              <input type="submit" value="Edit Smoothie" onClick={handleEdit}/><br/>
              <input type="submit" value="Delete Smoothie" onClick={handleDelete}/>
              </div>)
            }
          </form>
        </div>
    );
}

export default Smoothie

