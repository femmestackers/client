//pass current form state  to edit ingredients components and setformstate
//map through list of ingredients and show field for 2 
//have a form with onsubmit  
/*

import React, {useState, Fragment} from 'react';
import './Styles.css';

const EditIngredients = () => {
    const [inputFields, setInputFields] = useState([
        { ingredient: '', quantity: '' }
      ]);


      //const initialInputFields = Object.keys(ingredients).length>0 ? [] : [{ ingredient: '', quantity: '' }]
      function populateIngredients() {  
        Object.keys(ingredients).forEach((ingredient)=> {
          setInputFields([...inputFields, {ingredient:ingredient, quantity: ingredients[ingredient]}])
        })
      }
      populateIngredients()
    

      function handleSubmit(event) {
        event.preventDefault();
        console.log("inputFields", inputFields);
      }

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

return (
    <div>
      
     
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label htmlFor="ingredient">Ingredient</label>
                <input onChange={event => handleInputChange(index, event)}
                  type="text"
                  className="form-control"
                  id="ingredient"
                  name="ingredient"
                  value={inputField.ingredient}
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="quantity">Quantity</label>
                <input onChange={event => handleInputChange(index, event)}
                  type="text"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  value={inputField.quantity}
                />
              </div>
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
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
          <button
            className="btn btn-primary mr-2"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
        <br/>
    
      
    </div>
  )

}
//<pre>
    //{JSON.stringify(inputFields, null, 2)}
    //</pre>



export default EditIngredients

*/