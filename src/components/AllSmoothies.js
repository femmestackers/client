import React from 'react'
import Smoothie from "./Smoothie"
import sm_data from "./../data/sm_data"

const AllSmoothies = (data) =>{
  const titleStyles = {
    color: 'green',
    fontSize: '2.2em',
}
  
return (
   <div className="allSmoothie-singleSmoothi-background">
      <div>
          <div style={titleStyles}>
            All smoothies
            </div>
          <div>
            {sm_data.map((smoothie)=> <Smoothie key={smoothie.id} smoothie={smoothie}/>)}
          </div>
      </div>
    </div>
      )
}
export default AllSmoothies