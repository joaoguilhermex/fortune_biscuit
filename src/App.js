import React, {Component} from "react";
import './App.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      quoteText: ''
    }

    this.breakBiscuit = this.breakBiscuit.bind(this);

    this.quotes = [
      `Follow the good ones and learn from them`,
      `Laughter is the shortest distance between two people`,
      `Let go of your worries and be happy`,
      `Perform the obvious, consider unlikely and conquer the impossible`,
      `Believe in miracles, but don't depend on them`,
      `The biggest barrier to success is the fear of failure`,
    ]
  }

  breakBiscuit(){
    let state = this.state;
    let randomNumber = Math.floor(Math.random() * this.quotes.length);
    state.quoteText = `"${this.quotes[randomNumber]}"`;
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscuit.png')} className="img"/>
        <OpenButton name="Open biscuit" actBtn={this.breakBiscuit}/>
        <h3 className="quoteText">{this.state.quoteText}</h3>
      </div> 
    );
  }
}

class OpenButton extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.actBtn}>{this.props.name}</button>
      </div>
    );
  }
}

export default App;
