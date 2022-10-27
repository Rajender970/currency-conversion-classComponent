import React from 'react'
import "./styles.css";

export default class  App extends React.Component {
  constructor(){
    super();
    this.state={
      usd:0,
      inr:0
    }
  }
  changeValue=(e)=>{
    this.setState({
      ...this.state,[e.target.name]:e.target.value
    })
  }
  
  componentDidUpdate(){
    document.getElementById('inr').value=this.state.usd * 80;
    document.getElementById('usd').value=this.state.inr / 80;

  }
  render(){
  return (
    <div className="App">
      <h1>USD:</h1>
      <span>	&#36;</span>
      <input id='usd' 
      name='usd' type="number" 
      value={this.state.usd}
      onChange={this.changeValue.bind(this)}/>
      <h1>INR:</h1>
      <span>&#8377;</span>
      <input id='inr' name='inr' 
      type="number" 
      value={this.state.inr}
      onChange={this.changeValue}/>
    </div>
  );
}
}