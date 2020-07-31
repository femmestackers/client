import React, {useState, Fragment, useEffect} from 'react';
import './Styles.css';

const AddIngredients = ({ingredients, setIngredients}) => {
  console.log(ingredients)
  const initialInputFields = Object.keys(ingredients).length>0 ? [] : [{ ingredient: '', quantity: '' }]
    const [inputFields, setInputFields] = useState(initialInputFields);

    useEffect(()=>{
      function populateIngredients() {  
        let fields = [...inputFields]
        Object.keys(ingredients).forEach((ingredient)=> {
          fields.push({ingredient:ingredient, quantity: ingredients[ingredient]})
        })
        setInputFields(fields)
      }
      populateIngredients()
      console.log("input fields", inputFields)
    }, [])
       


      const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "ingredient") {
          values[index].ingredient = event.target.value;
        } else {
          values[index].quantity = event.target.value;
        }
    
        setInputFields(values);
      };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ ingredient: '', quantity: '' });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  const handleSave=(event)=> {
    event.preventDefault()
      console.log("handle save", inputFields)
      let updatedIngredients = {}
      for (let field of inputFields){
        const key= field.ingredient
        const value = field.quantity
        updatedIngredients[key]=value
      }
      setIngredients(updatedIngredients)
  }

  const labelStyles = {
    color: 'green',
    fontSize: '1em',
}

 const plusStyles= {
  marginBottom: '1em',
  width: '2em',
  borderRadius: '.5em',
  borderColor: '#F3C623',
  backgroundColor: '#F3C623'
 }

 const saveStyles= {
  marginBottom: '1em',
  width: '10em',
  borderRadius: '.5em',
  borderColor: '#F3C623',
  backgroundColor: '#F3C623'
 }
console.log("input fields", inputFields)
return (
    <div>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label style={labelStyles} htmlFor="ingredient">Ingredient</label><br/>
                <input onChange={event => handleInputChange(index, event)}
                  type="text"
                  className="form-control"
                  id="ingredient"
                  name="ingredient"
                  value={inputField.ingredient}
                />
              </div>
              <div className="form-group col-sm-4">
                <label style={labelStyles} htmlFor="quantity">Quantity</label><br/>
                <input onChange={event => handleInputChange(index, event)}
                  type="text"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  value={inputField.quantity}
                />
              </div>
              <div className="form-group col-sm-2">
                <button style={plusStyles}
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button style={plusStyles}
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button style={saveStyles}
            className="btn btn-primary mr-2"
            onClick={handleSave}
          >
            Save Ingredients
          </button>
        </div>
        <br/>
    
      
    </div>
  )

}
//<pre>
    //{JSON.stringify(inputFields, null, 2)}
    //</pre>



export default AddIngredients

