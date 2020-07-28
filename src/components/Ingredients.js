import React from 'react'

const Ingredients=({ingredients}) => {
    return(
        <div>
            {Object.keys(ingredients).map((ingredient)=>{
                return <div key={ingredient} >{ingredients[ingredient]} : {ingredient}</div>

            })}
        </div>

    )
}

export default Ingredients