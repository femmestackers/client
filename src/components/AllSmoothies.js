import React, {useState, useEffect} from 'react'
import Smoothie from './Smoothie'
import {useGlobalState} from '../config/store'

//add a field for dropdown categories where user can select 
//add a piece of localState with usestate called smoothies to display and use on line 13
//have selected category initially sety to null , have an effect to check if category isnt null then set smoothies to display in filtered list

const AllSmoothies = (props) =>{
      const {store} = useGlobalState()
      const {smoothies} = store
      const [selectedCategory, setSelectedCategory] = useState("Select a category")
      const [smoothiesToDisplay, setSmoothiesToDisplay] = useState(smoothies)

      useEffect(()=>{
        if (selectedCategory !== "Select a category") {
          const smoothiesByCategory = smoothies.filter((smoothie)=> smoothie.category === selectedCategory)
        setSmoothiesToDisplay(smoothiesByCategory)
        } else {
          setSmoothiesToDisplay(smoothies)
        }
      }, [selectedCategory, smoothies])

      function handleChange(event) {
          setSelectedCategory(event.target.value)  
      }

    const titleStyles = {
        color: 'green',
        fontSize: '2.2em',
        marginBottom: '1em',
        marginLeft: '1.3em'
    }
    const labelStyles = {
      color: 'blue',
      fontSize: '0.7em',
      marginLeft:'15em'
    }
    const selectStyles = {
      color: 'blue',
      fontSize: '0.7em',
      marginLeft: '1em',
      borderRadius: '1em',
      backgroundColor: 'lightblue',
      textAlign:'center'
    }
  
    return (
      <div className="allSmoothie-background">
        <div> 
            <br/>
            
            <div style={titleStyles}>
              <label style={labelStyles}>
              Select a Category of Smoothies:
              <select style={selectStyles} value={selectedCategory} onChange={handleChange}> 
              <option value="Select a category">Select a category</option>
              <option value="Post workout">Post-workout</option>
              <option value="Nut free">Nut free</option>
              <option value="Pregnancy and post natal">Pregnancy/Post-natal</option>
              <option value="Diabetic-friendly">Diabetic-friendly</option>
              <option value="Detox">Detox</option>
              <option value="Weight-loss">Weight-loss</option>
              </select>
              </label>
            </div>
            <div className="container-allSmoothie">
              {smoothiesToDisplay.map(smoothie => (<Smoothie {...props} key={smoothie._id} smoothie={smoothie}/> ))}
            </div>
        </div>
      </div>
    )
  }    

export default AllSmoothies