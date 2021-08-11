import React, { Component } from 'react';
import './App.css';
import GiftOpen from './images/giftopen';
import hp6 from './images/hp6.jpg'
import hp4 from './images/hp4.jpg'
import confetti1new from './images/confetti1new.jpg'
import gift1 from './images/gift1.jpg'

class App extends Component {
  state ={
    trigger : true
  }
  handletrigger = () => {
    this.setState({trigger:false});
  }
  render(){
    const {trigger} = this.state
    // console.log(trigger)
    
    return (
      trigger ? 
      <div className="background">
        <img src={hp6} className="img1" />
        <img src={hp4} className="img2" />
        <img src={confetti1new} className="img3" />
        <img src={confetti1new} className="img4" />
        <div className="hb">
        <h1>Happy Birthday</h1> <h2>To You</h2> <h2>From</h2> <h2>Prit</h2>
        <img src={gift1} className="gift" onClick={this.handletrigger}/>  
        </div>
        
      </div> : <GiftOpen />
    );
    
  }
}

export default App;
