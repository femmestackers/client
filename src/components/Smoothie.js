import React from 'react'
import {Link} from 'react-router-dom'
import Ingredients from './Ingredients'
import './Styles.css'
import {useGlobalState} from '../config/store'
import {deleteSmoothie} from '../services/smoothieServices'



 const Smoothie = ({history, smoothie}) => {

  const {store, dispatch} = useGlobalState()
  const {smoothies, loggedInUser} = store
  if (!smoothie) return null

  const {name,category, ingredients,instructions,fyi}= smoothie
  const authoriseEditDelete = loggedInUser && loggedInUser === smoothie.username
  function handleEdit(event) {
    event.preventDefault()
    history.push(`/smoothies/edit/${smoothie._id}`)
  }
  

  //Handle delete button
  function handleDelete(event) {
    event.preventDefault()
     deleteSmoothie(smoothie._id).then(() => {
        console.log("deleted smoothie")
        const updatedSmoothies = smoothies.filter((filterSmoothie) => filterSmoothie._id !== smoothie._id)
        dispatch ({
            type: "setSmoothies",
            data: updatedSmoothies
        })
        alert("You deleted your smoothie")
        history.push("/smoothies")
    }).catch((error) => {
        console.log("There was an error deleting smoothie", error)
    })
}

const labelStyles = {
    color: 'green',
    fontSize: '1.2em',
}
const nameStyles = {
    color: 'blue',
    fontSize: '1.2em',
}

const titleStyles = {
    color: 'green',
    fontSize: '1.2em',
    marginBottom: '2.2em',
  }

    return (
        <div className="single-smoothie-container">
                <div className="second-single-smoothie-container">
                    <br/> <br/>
                    <div>
            <div className="smoothieBox">
                <form className="smoothieBoxContent">  
                <div>
                    <Link to={`/smoothies/${smoothie._id}`}>
                    <label style={nameStyles}>Smoothie name:{name}</label>
                    </Link>
                </div>
                <br/>
                <div>
                    <label style={labelStyles}>Smoothie category:{category}</label>
                </div>
                <br/>
                <div>
                    <label style={labelStyles}>Ingredients:</label>
                    <Ingredients ingredients= {ingredients} />
                </div>
                <br/>
                <div>
                    <label style={labelStyles}>Instructions:{instructions}</label>
                </div>
                <br/>
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
                    </div>
            </div>
            <div className="background-pic-single-smoothi-box">
            </div>
</div>
    );
}

export default Smoothie