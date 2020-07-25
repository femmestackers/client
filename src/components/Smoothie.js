import React from 'react'
import Ingredients from './Ingredients'
import './Styles.css'

class Smoothie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Nut free'};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange=(event)=> {    this.setState({value: event.target.value});  }
  handleSubmit=(event)=> {
    alert('Your Smoothie category is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const {name,category, ingredients,instructions,fyi,comments}=this.props.smoothie
    return (
  <div className="first-container-addsmoothie">
      <h1>Enjoy!!</h1>    
      <form onSubmit={this.handleSubmit}>
      <div>
          <label>Smoothie name:{name}</label>
      </div>
      <br/>
      <div>
          <label>Smoothie category:{category}</label>
      </div>
      <br/>
      <div>
          <label>Ingredients:</label>
          <Ingredients ingredients={ingredients} />
      </div>
      <br/>
      <div>
          <label>Instructions:{instructions}</label>
      </div>
      <br/>
      <input type="submit" value="Edit Smoothie"></input>
      <input type="submit" value="Delete Smoothie"></input>
      <input type="submit" value="Edit Pic"></input>
</form>
</div>
    );
  }
}

export default Smoothie

