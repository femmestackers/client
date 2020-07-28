import React from 'react'
import './Styles.css'

class NewSmoothie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Nut free'};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange=(event)=> {    this.setState({value: event.target.value});  }
  handleSubmit=(event)=> {
    alert('Your smoothie has been posted');
    event.preventDefault();
  }
  handleUploadPic=(event)=> {
    alert('Your pic has been uploaded');
    event.preventDefault();
  }
  

  render() {
    const labelStyles = {
      color: 'green',
      fontSize: '1.2em',
  }
  const titleStyles = {
    color: 'green',
    fontSize: '2.2em',
}
    return (
  <div className="first-container-addsmoothie">
    <div className="formbox">
      <h1 style={titleStyles}>Post your Smoothie!!</h1>    
      <form >
      <div>
          <label style={labelStyles}>Smoothie name</label>
          <input type="text" name="smoothie-name" placeholder="Enter a smoothie name"></input>
      </div>
      <div>
          <label style={labelStyles}>
          Select a smoothie category:
          <select value={this.state.value} onChange={this.handleChange}>            
            <option value="Pregnancy and post natal">Pregnancy and post natal</option>
            <option value="Nut free">Nut free</option>
            <option value="Diabetic-friendly">Diabetic-friendly</option>
            <option value="Detox">Detox</option>
            <option value="Weight-loss">Weight-loss</option>
            <option value="Post workout">Post workout</option>
          </select>
          </label>
      </div>
      <div>
          <label style={labelStyles}>Ingredients</label>
          <input type="text" name="ingredients" placeholder="Enter ingredients"></input>
      </div>
      <div>
          <label style={labelStyles}>Instructions</label>
          <input type="text" name="instructions" placeholder="Enter the instructions"></input>
      </div>
      <div>
          <label style={labelStyles}>Why this smoothie?</label>
          <input type="text" name="instructions" placeholder="Goodness of this smoothie"></input>
      </div>
      <input onClick={this.handleSubmit} type="submit" value="Post Smoothie"></input>
</form>
</div>
</div>
    );
  }
}

export default NewSmoothie

