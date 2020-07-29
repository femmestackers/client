import React from 'react'

const Ingredients=({ingredients}) => {
    if (!ingredients) {
        return null
    }
    return(
        <div>
            {Object.keys(ingredients).map((ingredient)=>{
                return <div key={ingredient} >{ingredients[ingredient]} : {ingredient}</div>

            })}
        </div>

    )
}

export default Ingredients