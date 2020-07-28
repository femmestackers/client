import React from 'react'
import './Styles.css'

const Smoothie = (smoothie) =>{
  const {name, category, ingredients, instructions, fyi} = smoothie
    return (
       <div className="smoothieBox">
          <div className="smoothieBoxContent">  
              <div>
                  <label>Smoothie name:{name}</label>
              </div>
              <br/>
              <div>
                  <label>Smoothie category:{category}</label>
              </div>
              <br/>
              <div>
                  <label>Ingredients:{ingredients}</label>
              </div>
              <br/>
              <div>
                  <label>Instructions:{instructions}</label>
              </div>
              <br/>
              <div>
                  <label>Fyi:{fyi}</label>
              </div>
              <div className="buttonStyles">
              <input type="submit" value="Edit Smoothie"/><br/>
              <input type="submit" value="Delete Smoothie"/>
              </div>
          </div>
        </div>
    );
}

export default Smoothie

