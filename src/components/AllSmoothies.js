import React from 'react'
import Smoothie from './Smoothie'
import {useGlobalState} from '../config/store'


const AllSmoothies = () =>{
      const {store} = useGlobalState()
      const {smoothies} = store
  
    return (
      <div className="first-container-addsmoothie">
        {smoothies.map(smoothie => (<Smoothie key={smoothie._id} smoothie={smoothie}/> ))}
      </div>
    )
  }    

export default AllSmoothies